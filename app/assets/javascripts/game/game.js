// Main game logic - Phaser scene functions
function create() {
  const gameWidth = this.scale.width;
  const gameHeight = this.scale.height;
  
  // Create Taiwanese-themed background
  const cols = Math.floor(gameWidth / TILE_SIZE);
  const rows = Math.floor(gameHeight / TILE_SIZE);
  
  // Create floor tiles with pattern
  for (let x = 0; x < gameWidth; x += TILE_SIZE) {
    for (let y = 0; y < gameHeight; y += TILE_SIZE) {
      const tile = this.add.image(x + TILE_SIZE/2, y + TILE_SIZE/2, 'tile');
      tile.setAlpha(0.6);
      tile.setDepth(-100); // Behind everything
    }
  }
  
  // Add decorative lanterns in corners (animated)
  const lanterns = [];
  const lanternPositions = [
    { x: 40, y: 40 },
    { x: gameWidth - 40, y: 40 },
    { x: 40, y: gameHeight - 40 },
    { x: gameWidth - 40, y: gameHeight - 40 }
  ];
  
  lanternPositions.forEach(pos => {
    const lantern = this.add.image(pos.x, pos.y, 'lantern');
    lantern.setAlpha(0.3);
    lantern.setDepth(-99);
    lantern.setScale(0.8);
    // Gentle floating animation
    this.tweens.add({
      targets: lantern,
      y: pos.y - 5,
      duration: 2000 + Math.random() * 1000,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });
    lanterns.push(lantern);
  });
  
  // Add floating particles (like dust motes or light particles)
  const particles = this.add.particles(0, 0, 'particle', {
    x: { min: 0, max: gameWidth },
    y: { min: 0, max: gameHeight },
    speed: { min: 10, max: 30 },
    scale: { start: 0.3, end: 0 },
    lifespan: 3000,
    frequency: 200,
    alpha: { start: 0.4, end: 0 },
    blendMode: 'ADD'
  });
  particles.setDepth(-98);
  
  // Add cute Taiwanese NPCs (non-interactive, just decorative)
  const npcs = [];
  const npcTypes = ['bubble_tea_npc', 'pineapple_cake_npc', 'stinky_tofu_npc', 'oyster_omelette_npc'];
  const npcCount = 6; // Add a few NPCs around the map
  
  for (let i = 0; i < npcCount; i++) {
    const npcType = npcTypes[Math.floor(Math.random() * npcTypes.length)];
    // Place NPCs in safe areas (not too close to edges or spawn points)
    const x = Phaser.Math.Between(80, gameWidth - 80);
    const y = Phaser.Math.Between(80, gameHeight - 80);
    
    const npc = this.add.sprite(x, y, npcType);
    npc.setScale(0.8);
    npc.setDepth(-50); // Behind player and enemies but above background
    npc.setAlpha(0.7);
    
    // Enable physics for collision detection
    this.physics.add.existing(npc);
    npc.body.setSize(24, 24); // Collision box
    npc.body.setImmovable(true);
    
    // Gentle bobbing animation
    this.tweens.add({
      targets: npc,
      y: y - 3,
      duration: 1500 + Math.random() * 500,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut',
      delay: Math.random() * 1000
    });
    
    // Gentle rotation (very subtle)
    this.tweens.add({
      targets: npc,
      angle: 2,
      duration: 2000 + Math.random() * 1000,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut',
      delay: Math.random() * 1000
    });
    
    npcs.push(npc);
  }
  
  // Store for cleanup if needed
  GameState.backgroundElements = { lanterns, particles, npcs };
  
  // Walls disabled for now - can be re-enabled later
  GameState.walls = this.physics.add.staticGroup();
  
  // Wall generation code removed - add back later if needed

  // Create player in safe zone (top-left area)
  const playerStartX = Phaser.Math.Between(TILE_SIZE * 2, TILE_SIZE * 4);
  const playerStartY = Phaser.Math.Between(TILE_SIZE * 2, TILE_SIZE * 4);
  GameState.player = this.physics.add.sprite(playerStartX, playerStartY, 'player');
  GameState.player.setCollideWorldBounds(true);
  GameState.player.setScale(1.5);
  GameState.player.body.setSize(24, 24); // Smaller collision box

  // Create enemies in safe zones (away from player)
  GameState.enemies = createEnemies(this, gameWidth, gameHeight);
  
  // Store scene reference for enemy movement
  GameState.scene = this;

  // Input
  GameState.cursors = this.input.keyboard.createCursorKeys();
  this.input.keyboard.on('keydown', handleKeyDown, this);
  
  // Make sure keyboard events work globally (for when combat is active)
  const gameContainer = document.getElementById('game-container');
  if (gameContainer) {
    gameContainer.setAttribute('tabindex', '0');
  }

  // Create hot pot on the right side (initially locked/cold)
  const doorX = gameWidth - 50;
  const doorY = gameHeight / 2;
  GameState.door = this.physics.add.sprite(doorX, doorY, 'door_locked');
  GameState.door.setScale(1);
  GameState.door.setImmovable(true);
  GameState.door.body.setSize(48, 64);
  GameState.door.setData('triggered', false);
  GameState.doorUnlocked = false;
  
  // Add collider for locked hot pot (blocks player) - store reference to remove later
  GameState.doorCollider = this.physics.add.collider(GameState.player, GameState.door);

  // Collision detection
  // Wall collisions disabled for now
  // this.physics.add.collider(GameState.player, GameState.walls);
  // this.physics.add.collider(GameState.enemies, GameState.walls);
  this.physics.add.overlap(GameState.player, GameState.enemies, startCombat, null, this);
  this.physics.add.overlap(GameState.player, GameState.door, checkDoorCollision, null, this);
  
  // NPC interaction - player can eat NPCs
  if (GameState.backgroundElements && GameState.backgroundElements.npcs) {
    GameState.backgroundElements.npcs.forEach(npc => {
      this.physics.add.overlap(GameState.player, npc, eatNPC, null, this);
    });
  }

  // UI
  createUI(this);
}

function unlockDoor() {
  if (GameState.door && !GameState.doorUnlocked) {
    GameState.doorUnlocked = true;
    GameState.door.setTexture('door_unlocked');
    
    // Make hot pot passable - remove collider so player can walk through
    if (GameState.doorCollider) {
      GameState.doorCollider.destroy();
      GameState.doorCollider = null;
    }
    
    // Show message that hot pot is ready
    const scene = GameState.scene;
    const gameWidth = scene.scale.width;
    const unlockText = scene.add.text(gameWidth / 2, 50, 'Hot Pot Ready! Go to the hot pot on the right.', {
      fontSize: '24px',
      fill: '#00ff88',
      fontStyle: 'bold'
    }).setOrigin(0.5);
    
    // Remove message after 3 seconds
    setTimeout(() => {
      unlockText.destroy();
    }, 3000);
  }
}

function eatNPC(player, npc) {
  if (!npc.active) return; // Already eaten
  
  // Play munch sound effect (using Web Audio API for simple sound)
  playMunchSound();
  
  // Add visual feedback - make NPC disappear with a scale animation
  const scene = GameState.scene;
  scene.tweens.add({
    targets: npc,
    scale: 0,
    alpha: 0,
    duration: 200,
    ease: 'Power2',
    onComplete: () => {
      npc.destroy();
    }
  });
  
  // Mark as inactive to prevent multiple triggers
  npc.active = false;
  
  // Remove from NPCs array
  if (GameState.backgroundElements && GameState.backgroundElements.npcs) {
    const index = GameState.backgroundElements.npcs.indexOf(npc);
    if (index > -1) {
      GameState.backgroundElements.npcs.splice(index, 1);
    }
  }
}

function playMunchSound() {
  // Create a simple "munch munch" sound using Web Audio API
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // Create two quick munch sounds
    const playMunch = (delay = 0) => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Munch sound: quick, low-frequency noise-like sound
      oscillator.type = 'sawtooth';
      oscillator.frequency.setValueAtTime(150, audioContext.currentTime + delay);
      oscillator.frequency.exponentialRampToValueAtTime(80, audioContext.currentTime + delay + 0.1);
      
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime + delay);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + delay + 0.1);
      
      oscillator.start(audioContext.currentTime + delay);
      oscillator.stop(audioContext.currentTime + delay + 0.1);
    };
    
    // Play two munch sounds in quick succession
    playMunch(0);
    playMunch(0.1);
  } catch (e) {
    // Fallback: just log if audio context fails
    console.log('Munch munch!');
  }
}

function playDamageSound() {
  // Create a damage/hurt sound effect
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Damage sound: sharp, descending tone
    oscillator.type = 'sawtooth';
    oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.15);
    
    gainNode.gain.setValueAtTime(0.4, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.15);
  } catch (e) {
    console.log('Ouch!');
  }
}

function playDeathSound() {
  // Create a dramatic death sound effect
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // Long descending tone for death
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Death sound: long, dramatic descending tone
    oscillator.type = 'sawtooth';
    oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(50, audioContext.currentTime + 0.8);
    
    gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.8);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.8);
  } catch (e) {
    console.log('Game Over!');
  }
}

function checkDoorCollision(player, door) {
  // Only allow passage if hot pot is unlocked/ready
  if (GameState.doorUnlocked && GameState.door) {
    // Prevent multiple triggers
    if (GameState.door.getData('triggered')) return;
    GameState.door.setData('triggered', true);
    
    // Progress to next level
    const scene = GameState.scene;
    const gameWidth = scene.scale.width;
    const gameHeight = scene.scale.height;
    
    const levelCompleteText = scene.add.text(gameWidth / 2, gameHeight / 2 - 50, `${GameState.levelName} Complete!`, {
      fontSize: '36px',
      fill: '#00ff88',
      fontStyle: 'bold'
    }).setOrigin(0.5);
    
    const nextLevelText = scene.add.text(gameWidth / 2, gameHeight / 2, 'Progressing to next level...', {
      fontSize: '24px',
      fill: '#4ade80'
    }).setOrigin(0.5);
    
    // Reload page after 2 seconds to progress to next level
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }
}

function update() {
  if (GameState.combatActive) return;

  // Player movement
  GameState.player.setVelocity(0);

  if (GameState.cursors.left.isDown) {
    GameState.player.setVelocityX(-200);
  } else if (GameState.cursors.right.isDown) {
    GameState.player.setVelocityX(200);
  }

  if (GameState.cursors.up.isDown) {
    GameState.player.setVelocityY(-200);
  } else if (GameState.cursors.down.isDown) {
    GameState.player.setVelocityY(200);
  }
  
  // Enemy random movement
  updateEnemyMovement();
}

// Initialize game only after Phaser is loaded
function initGame() {
  const loadingDiv = document.getElementById('game-loading');
  if (loadingDiv) loadingDiv.style.display = 'none';
  
  if (typeof Phaser === 'undefined') {
    console.error('Phaser.js not loaded!');
    const container = document.getElementById('game-container');
    if (container) {
      container.innerHTML = '<p style="color: #ff4444; padding: 20px; text-align: center;">Error: Phaser.js failed to load. Please refresh the page.</p>';
    }
    return;
  }
  
  console.log('Phaser loaded, version:', Phaser.VERSION);
  
  // Create config now that Phaser is loaded
  const container = document.getElementById('game-container');
  const containerWidth = container ? container.clientWidth : 1200;
  const containerHeight = container ? container.clientHeight : 750;
  
  GameState.config = {
    type: Phaser.AUTO,
    width: containerWidth,
    height: containerHeight,
    parent: 'game-container',
    backgroundColor: '#C4B5A0', // Darker warm beige/cream Taiwanese tile color
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 0 },
        debug: false
      }
    },
    scene: {
      preload: preload,
      create: create,
      update: update
    }
  };
  
  // After game is created, ensure canvas fills container
  setTimeout(() => {
    const gameCanvas = container.querySelector('canvas');
    if (gameCanvas) {
      gameCanvas.style.width = '100%';
      gameCanvas.style.height = '100%';
      gameCanvas.style.display = 'block';
    }
  }, 100);
  
  try {
    const game = new Phaser.Game(GameState.config);
    console.log('Game initialized successfully');
    
    // Ensure canvas fills container after game starts
    setTimeout(() => {
      const gameContainer = document.getElementById('game-container');
      if (gameContainer) {
        const canvas = gameContainer.querySelector('canvas');
        if (canvas) {
          canvas.style.width = '100%';
          canvas.style.height = '100%';
          canvas.style.display = 'block';
        }
      }
    }, 200);
  } catch (error) {
    console.error('Error initializing game:', error);
    const container = document.getElementById('game-container');
    if (container) {
      container.innerHTML = '<p style="color: #ff4444; padding: 20px; text-align: center;">Error initializing game: ' + error.message + '<br>Check console for details.</p>';
    }
  }
}

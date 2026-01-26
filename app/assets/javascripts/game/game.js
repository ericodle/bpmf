// Main game logic - Phaser scene functions
function create() {
  const gameWidth = this.scale.width;
  const gameHeight = this.scale.height;
  
  // Create grid-based tilemap background
  const cols = Math.floor(gameWidth / TILE_SIZE);
  const rows = Math.floor(gameHeight / TILE_SIZE);
  
  // Create floor tiles
  for (let x = 0; x < gameWidth; x += TILE_SIZE) {
    for (let y = 0; y < gameHeight; y += TILE_SIZE) {
      this.add.image(x + TILE_SIZE/2, y + TILE_SIZE/2, 'tile').setAlpha(0.4);
    }
  }
  
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

  // Create door on the right side (initially locked)
  const doorX = gameWidth - 50;
  const doorY = gameHeight / 2;
  GameState.door = this.physics.add.sprite(doorX, doorY, 'door_locked');
  GameState.door.setScale(1);
  GameState.door.setImmovable(true);
  GameState.door.body.setSize(48, 64);
  GameState.door.setData('triggered', false);
  GameState.doorUnlocked = false;
  
  // Add collider for locked door (blocks player) - store reference to remove later
  GameState.doorCollider = this.physics.add.collider(GameState.player, GameState.door);

  // Collision detection
  // Wall collisions disabled for now
  // this.physics.add.collider(GameState.player, GameState.walls);
  // this.physics.add.collider(GameState.enemies, GameState.walls);
  this.physics.add.overlap(GameState.player, GameState.enemies, startCombat, null, this);
  this.physics.add.overlap(GameState.player, GameState.door, checkDoorCollision, null, this);

  // UI
  createUI(this);
}

function unlockDoor() {
  if (GameState.door && !GameState.doorUnlocked) {
    GameState.doorUnlocked = true;
    GameState.door.setTexture('door_unlocked');
    
    // Make door passable - remove collider so player can walk through
    if (GameState.doorCollider) {
      GameState.doorCollider.destroy();
      GameState.doorCollider = null;
    }
    
    // Show message that door is unlocked
    const scene = GameState.scene;
    const gameWidth = scene.scale.width;
    const unlockText = scene.add.text(gameWidth / 2, 50, 'Door Unlocked! Go to the door on the right.', {
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

function checkDoorCollision(player, door) {
  // Only allow passage if door is unlocked
  if (GameState.doorUnlocked && GameState.door) {
    // Prevent multiple triggers
    if (GameState.door.getData('triggered')) return;
    GameState.door.setData('triggered', true);
    
    // Progress to next level
    const levelName = GameState.currentGameLevel === 1 ? 'Level 1' : GameState.currentGameLevel === 2 ? 'Level 2' : 'Level 3';
    const scene = GameState.scene;
    const gameWidth = scene.scale.width;
    const gameHeight = scene.scale.height;
    
    const levelCompleteText = scene.add.text(gameWidth / 2, gameHeight / 2 - 50, `${levelName} Complete!`, {
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
    backgroundColor: '#0a1f0a',
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

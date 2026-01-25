// Main game logic - Phaser scene functions
function create() {
  // Create tilemap background
  const gameWidth = this.scale.width;
  const gameHeight = this.scale.height;
  for (let x = 0; x < gameWidth; x += 16) {
    for (let y = 0; y < gameHeight; y += 16) {
      this.add.image(x, y, 'tile').setAlpha(0.3);
    }
  }

  // Create player
  GameState.player = this.physics.add.sprite(100, 100, 'player');
  GameState.player.setCollideWorldBounds(true);
  GameState.player.setScale(1.5);

  // Create enemies
  GameState.enemies = createEnemies(this);

  // Input
  GameState.cursors = this.input.keyboard.createCursorKeys();
  this.input.keyboard.on('keydown', handleKeyDown, this);
  
  // Make sure keyboard events work globally (for when combat is active)
  const gameContainer = document.getElementById('game-container');
  if (gameContainer) {
    gameContainer.setAttribute('tabindex', '0');
  }

  // Collision detection
  this.physics.add.overlap(GameState.player, GameState.enemies, startCombat, null, this);

  // UI
  createUI(this);
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
  updateEnemyMovement(this);
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

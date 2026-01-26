// Enemy creation and movement logic
function createEnemies(scene) {
  const gameWidth = scene.scale.width;
  const gameHeight = scene.scale.height;
  const enemies = [];
  
  if (GameState.bpmfLessons && GameState.bpmfLessons.length > 0) {
    // First, filter to get only unique BPMF characters
    const uniqueLessonsMap = new Map();
    GameState.bpmfLessons.forEach(lesson => {
      const bpmfKey = lesson.bpmf?.trim();
      if (bpmfKey && !uniqueLessonsMap.has(bpmfKey)) {
        uniqueLessonsMap.set(bpmfKey, lesson);
      }
    });
    
    // Convert to array and shuffle
    const uniqueLessons = Array.from(uniqueLessonsMap.values());
    const shuffledLessons = uniqueLessons.sort(() => Math.random() - 0.5);
    const numEnemies = Math.min(5, shuffledLessons.length);
    
    for (let i = 0; i < numEnemies; i++) {
      const lesson = shuffledLessons[i];
      if (!lesson) break;
      
      const x = Phaser.Math.Between(200, gameWidth - 200);
      const y = Phaser.Math.Between(200, gameHeight - 200);
      const enemy = scene.physics.add.sprite(x, y, 'enemy');
      enemy.setScale(1.5);
      enemy.setCollideWorldBounds(true);
      enemy.setData('health', 50);
      enemy.setData('bpmf', lesson);
      // Random movement data
      enemy.setData('moveTimer', Phaser.Math.Between(ENEMY_MOVE_TIMER_MIN, ENEMY_MOVE_TIMER_MAX));
      enemy.setData('moveDirection', { 
        x: Phaser.Math.Between(-1, 1), 
        y: Phaser.Math.Between(-1, 1) 
      });
      enemy.setData('moveSpeed', Phaser.Math.Between(ENEMY_MOVE_SPEED_MIN, ENEMY_MOVE_SPEED_MAX));
      enemies.push(enemy);
    }
  } else {
    console.error('No BPMF lessons available for enemies');
  }
  
  return enemies;
}

function updateEnemyMovement(scene) {
  GameState.enemies.forEach(enemy => {
    if (!enemy.active) return;
    
    let moveTimer = enemy.getData('moveTimer');
    let moveDirection = enemy.getData('moveDirection');
    let moveSpeed = enemy.getData('moveSpeed');
    
    // Initialize if not set
    if (moveTimer === undefined) {
      moveTimer = Phaser.Math.Between(ENEMY_MOVE_TIMER_MIN, ENEMY_MOVE_TIMER_MAX);
      moveDirection = { 
        x: Phaser.Math.Between(-1, 1), 
        y: Phaser.Math.Between(-1, 1) 
      };
      moveSpeed = Phaser.Math.Between(ENEMY_MOVE_SPEED_MIN, ENEMY_MOVE_SPEED_MAX);
      enemy.setData('moveTimer', moveTimer);
      enemy.setData('moveDirection', moveDirection);
      enemy.setData('moveSpeed', moveSpeed);
    }
    
    // Update timer (assuming ~60fps, so ~16ms per frame)
    moveTimer -= 16;
    
    if (moveTimer <= 0) {
      // Change direction randomly
      moveDirection = {
        x: Phaser.Math.Between(-1, 1),
        y: Phaser.Math.Between(-1, 1)
      };
      moveTimer = Phaser.Math.Between(ENEMY_MOVE_TIMER_MIN, ENEMY_MOVE_TIMER_MAX);
      moveSpeed = Phaser.Math.Between(ENEMY_MOVE_SPEED_MIN, ENEMY_MOVE_SPEED_MAX);
      enemy.setData('moveTimer', moveTimer);
      enemy.setData('moveDirection', moveDirection);
      enemy.setData('moveSpeed', moveSpeed);
    } else {
      enemy.setData('moveTimer', moveTimer);
    }
    
    // Apply movement
    enemy.setVelocity(moveDirection.x * moveSpeed, moveDirection.y * moveSpeed);
  });
}

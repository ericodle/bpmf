// Enemy creation and movement logic
function createEnemies(scene, gameWidth, gameHeight) {
  const enemies = [];
  
  if (GameState.bpmfLessons && GameState.bpmfLessons.length > 0) {
    // Additional safety filter: only use lessons that match expected BPMF for this level
    let validLessons = GameState.bpmfLessons;
    if (GameState.expectedBpmf && GameState.expectedBpmf.length > 0) {
      const expectedSet = new Set(GameState.expectedBpmf.map(b => b.trim()));
      validLessons = GameState.bpmfLessons.filter(lesson => {
        const bpmf = lesson.bpmf?.trim();
        return bpmf && expectedSet.has(bpmf);
      });
      if (validLessons.length !== GameState.bpmfLessons.length) {
        console.warn(`Filtered ${GameState.bpmfLessons.length - validLessons.length} invalid lessons. Expected: ${Array.from(expectedSet).join(', ')}`);
      }
    }
    
    // First, filter to get only unique BPMF characters
    const uniqueLessonsMap = new Map();
    validLessons.forEach(lesson => {
      const bpmfKey = lesson.bpmf?.trim();
      if (bpmfKey && !uniqueLessonsMap.has(bpmfKey)) {
        uniqueLessonsMap.set(bpmfKey, lesson);
      }
    });
    
    // Convert to array and shuffle
    const uniqueLessons = Array.from(uniqueLessonsMap.values());
    const shuffledLessons = uniqueLessons.sort(() => Math.random() - 0.5);
    // Use all available lessons for this level (typically 3-4 enemies)
    const numEnemies = shuffledLessons.length;
    
    for (let i = 0; i < numEnemies; i++) {
      const lesson = shuffledLessons[i];
      if (!lesson) break;
      
      // Spawn enemies in safe zones (bottom-right area, away from player)
      const cols = Math.floor(gameWidth / TILE_SIZE);
      const rows = Math.floor(gameHeight / TILE_SIZE);
      const spawnCol = Phaser.Math.Between(cols - 6, cols - 2);
      const spawnRow = Phaser.Math.Between(rows - 6, rows - 2);
      const x = spawnCol * TILE_SIZE + TILE_SIZE / 2;
      const y = spawnRow * TILE_SIZE + TILE_SIZE / 2;
      
      const enemy = scene.physics.add.sprite(x, y, 'enemy');
      enemy.setScale(1.5); // Already 3x bigger sprite (64x64 instead of 32x32), so 1.5x scale = 4.5x original
      enemy.setCollideWorldBounds(true);
      enemy.body.setSize(48, 48); // Larger collision box to match bigger sprite
      enemy.setData('health', 50);
      enemy.setData('bpmf', lesson);
      enemies.push(enemy);
    }
  } else {
    console.error('No BPMF lessons available for enemies');
  }
  
  return enemies;
}

function updateEnemyMovement() {
  if (!GameState.player || !GameState.player.active) return;
  
  GameState.enemies.forEach((enemy, index) => {
    if (!enemy.active) return;
    
    // Calculate direction to player
    const dx = GameState.player.x - enemy.x;
    const dy = GameState.player.y - enemy.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance > 0) {
      // Add variation to prevent clustering - each pig approaches from slightly different angle
      const baseAngle = Math.atan2(dy, dx);
      // Each pig gets a unique offset based on index (spreads them in a circle around player)
      const angleOffset = (index * Math.PI * 2 / Math.max(GameState.enemies.length, 1)) * 0.6;
      // Add some time-based variation for more organic movement
      const timeVariation = Math.sin(Date.now() / 1200 + index * 2) * 0.3;
      const finalAngle = baseAngle + angleOffset + timeVariation;
      
      const moveSpeed = Phaser.Math.Between(ENEMY_MOVE_SPEED_MIN, ENEMY_MOVE_SPEED_MAX);
      const velocityX = Math.cos(finalAngle) * moveSpeed;
      const velocityY = Math.sin(finalAngle) * moveSpeed;
      
      enemy.setVelocity(velocityX, velocityY);
    } else {
      enemy.setVelocity(0, 0);
    }
  });
}

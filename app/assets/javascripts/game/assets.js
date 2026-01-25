// Asset loading and sprite creation
function preload() {
  // Create hero icon (simple character shape)
  const playerGraphics = this.add.graphics();
  playerGraphics.fillStyle(0x00ff88);
  // Body (circle)
  playerGraphics.fillCircle(16, 16, 12);
  // Head (smaller circle on top)
  playerGraphics.fillStyle(0x4ade80);
  playerGraphics.fillCircle(16, 8, 6);
  // Simple face (two dots for eyes)
  playerGraphics.fillStyle(0x0a1f0a);
  playerGraphics.fillCircle(13, 7, 1.5);
  playerGraphics.fillCircle(19, 7, 1.5);
  playerGraphics.generateTexture('player', 32, 32);
  playerGraphics.destroy();
  
  // Create enemy icon (spiky/angry shape)
  const enemyGraphics = this.add.graphics();
  enemyGraphics.fillStyle(0xff4444);
  // Body (diamond/square shape)
  enemyGraphics.fillRect(8, 8, 16, 16);
  // Spikes on top
  enemyGraphics.fillStyle(0xcc0000);
  enemyGraphics.fillTriangle(8, 8, 16, 4, 24, 8);
  // Angry eyes
  enemyGraphics.fillStyle(0x0a1f0a);
  enemyGraphics.fillRect(11, 12, 3, 3);
  enemyGraphics.fillRect(18, 12, 3, 3);
  // Angry mouth
  enemyGraphics.fillRect(12, 18, 8, 2);
  enemyGraphics.generateTexture('enemy', 32, 32);
  enemyGraphics.destroy();
  
  // Background tiles
  this.add.graphics()
    .fillStyle(0x444444)
    .fillRect(0, 0, 16, 16)
    .generateTexture('tile', 16, 16);
}

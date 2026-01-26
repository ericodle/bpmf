// Asset loading and sprite creation
function preload() {
  // Create bubble tea player (cute drink with straw)
  const playerGraphics = this.add.graphics();
  // Cup/bottle (brown/tan)
  playerGraphics.fillStyle(0x8B4513);
  playerGraphics.fillRect(6, 12, 20, 20);
  // Top of cup (lighter brown)
  playerGraphics.fillStyle(0xA0522D);
  playerGraphics.fillRect(6, 10, 20, 4);
  // Liquid/tea (dark brown)
  playerGraphics.fillStyle(0x654321);
  playerGraphics.fillRect(8, 14, 16, 16);
  // Bubbles (white circles)
  playerGraphics.fillStyle(0xFFFFFF);
  playerGraphics.fillCircle(12, 18, 3);
  playerGraphics.fillCircle(20, 22, 2.5);
  playerGraphics.fillCircle(16, 26, 2);
  // Straw (pink)
  playerGraphics.fillStyle(0xFF69B4);
  playerGraphics.fillRect(15, 4, 2, 8);
  // Straw top (darker pink)
  playerGraphics.fillStyle(0xFF1493);
  playerGraphics.fillRect(14, 4, 4, 2);
  // Cute face (two dots for eyes, smile)
  playerGraphics.fillStyle(0x0a1f0a);
  playerGraphics.fillCircle(12, 20, 1.5);
  playerGraphics.fillCircle(20, 20, 1.5);
  // Smile
  playerGraphics.lineStyle(2, 0x0a1f0a);
  playerGraphics.beginPath();
  playerGraphics.arc(16, 24, 4, 0, Math.PI);
  playerGraphics.strokePath();
  playerGraphics.generateTexture('player', 32, 32);
  playerGraphics.destroy();
  
  // Create pork pig enemy (cute but menacing)
  const enemyGraphics = this.add.graphics();
  // Body (pink circle)
  enemyGraphics.fillStyle(0xFFB6C1);
  enemyGraphics.fillCircle(16, 16, 14);
  // Snout (lighter pink)
  enemyGraphics.fillStyle(0xFFC0CB);
  enemyGraphics.fillEllipse(16, 20, 8, 6);
  // Nostrils (dark pink)
  enemyGraphics.fillStyle(0xFF69B4);
  enemyGraphics.fillCircle(14, 20, 1.5);
  enemyGraphics.fillCircle(18, 20, 1.5);
  // Ears (pink triangles)
  enemyGraphics.fillStyle(0xFFB6C1);
  enemyGraphics.fillTriangle(8, 8, 12, 4, 16, 8);
  enemyGraphics.fillTriangle(16, 8, 20, 4, 24, 8);
  // Eyes (black with white highlight)
  enemyGraphics.fillStyle(0x0a1f0a);
  enemyGraphics.fillCircle(12, 14, 2.5);
  enemyGraphics.fillCircle(20, 14, 2.5);
  enemyGraphics.fillStyle(0xFFFFFF);
  enemyGraphics.fillCircle(13, 13, 1);
  enemyGraphics.fillCircle(21, 13, 1);
  // Tail (curly pink - using arcs)
  enemyGraphics.lineStyle(3, 0xFFB6C1);
  enemyGraphics.beginPath();
  enemyGraphics.arc(28, 14, 4, 0, Math.PI, false);
  enemyGraphics.strokePath();
  enemyGraphics.beginPath();
  enemyGraphics.arc(26, 10, 3, 0, Math.PI, true);
  enemyGraphics.strokePath();
  enemyGraphics.generateTexture('enemy', 32, 32);
  enemyGraphics.destroy();
  
  // Wall texture (dark gray with border)
  const wallGraphics = this.add.graphics();
  wallGraphics.fillStyle(0x333333);
  wallGraphics.fillRect(0, 0, 32, 32);
  wallGraphics.lineStyle(2, 0x222222);
  wallGraphics.strokeRect(0, 0, 32, 32);
  wallGraphics.generateTexture('wall', 32, 32);
  wallGraphics.destroy();
  
  // Background tiles (floor)
  this.add.graphics()
    .fillStyle(0x2a4a2a)
    .fillRect(0, 0, 32, 32)
    .lineStyle(1, 0x1a3a1a)
    .strokeRect(0, 0, 32, 32)
    .generateTexture('tile', 32, 32);
}

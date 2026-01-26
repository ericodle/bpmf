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
  
  // Create pork pig enemy (cute and bigger!)
  const enemyGraphics = this.add.graphics();
  // Body (large pink circle - main body)
  enemyGraphics.fillStyle(0xFFB6C1);
  enemyGraphics.fillCircle(32, 32, 28);
  // Belly (lighter pink circle)
  enemyGraphics.fillStyle(0xFFC0CB);
  enemyGraphics.fillCircle(32, 36, 20);
  // Snout (lighter pink, bigger)
  enemyGraphics.fillStyle(0xFFE4E1);
  enemyGraphics.fillEllipse(32, 42, 18, 14);
  // Nostrils (dark pink, bigger)
  enemyGraphics.fillStyle(0xFF69B4);
  enemyGraphics.fillCircle(26, 42, 3);
  enemyGraphics.fillCircle(38, 42, 3);
  // Nose bridge (small line between nostrils)
  enemyGraphics.fillStyle(0xFFB6C1);
  enemyGraphics.fillRect(30, 40, 4, 2);
  // Ears (pink triangles, bigger and floppier)
  enemyGraphics.fillStyle(0xFFB6C1);
  enemyGraphics.fillTriangle(16, 16, 20, 8, 28, 16);
  enemyGraphics.fillTriangle(36, 16, 44, 8, 48, 16);
  // Inner ear (darker pink)
  enemyGraphics.fillStyle(0xFF91A4);
  enemyGraphics.fillTriangle(18, 14, 22, 10, 26, 14);
  enemyGraphics.fillTriangle(38, 14, 42, 10, 46, 14);
  // Eyes (bigger, cute with highlights)
  enemyGraphics.fillStyle(0x0a1f0a);
  enemyGraphics.fillCircle(24, 28, 5);
  enemyGraphics.fillCircle(40, 28, 5);
  // Eye highlights (white)
  enemyGraphics.fillStyle(0xFFFFFF);
  enemyGraphics.fillCircle(26, 26, 2);
  enemyGraphics.fillCircle(42, 26, 2);
  // Cheeks (rosy pink circles)
  enemyGraphics.fillStyle(0xFF91A4);
  enemyGraphics.fillCircle(18, 36, 6);
  enemyGraphics.fillCircle(46, 36, 6);
  // Mouth (cute smile)
  enemyGraphics.lineStyle(3, 0x0a1f0a);
  enemyGraphics.beginPath();
  enemyGraphics.arc(32, 48, 8, 0, Math.PI);
  enemyGraphics.strokePath();
  // Tail (curly pink - bigger and more prominent)
  enemyGraphics.lineStyle(5, 0xFFB6C1);
  enemyGraphics.beginPath();
  enemyGraphics.arc(56, 28, 8, 0, Math.PI, false);
  enemyGraphics.strokePath();
  enemyGraphics.beginPath();
  enemyGraphics.arc(52, 20, 6, 0, Math.PI, true);
  enemyGraphics.strokePath();
  enemyGraphics.beginPath();
  enemyGraphics.arc(58, 12, 4, 0, Math.PI, false);
  enemyGraphics.strokePath();
  // Legs (small circles at bottom)
  enemyGraphics.fillStyle(0xFFB6C1);
  enemyGraphics.fillCircle(22, 58, 4);
  enemyGraphics.fillCircle(42, 58, 4);
  enemyGraphics.generateTexture('enemy', 64, 64);
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
  
  // Door (locked) - red/brown with lock icon
  const doorLockedGraphics = this.add.graphics();
  doorLockedGraphics.fillStyle(0x8B4513);
  doorLockedGraphics.fillRect(0, 0, 48, 64);
  doorLockedGraphics.lineStyle(3, 0x654321);
  doorLockedGraphics.strokeRect(0, 0, 48, 64);
  // Door frame
  doorLockedGraphics.fillStyle(0x654321);
  doorLockedGraphics.fillRect(0, 0, 48, 8);
  doorLockedGraphics.fillRect(0, 56, 48, 8);
  doorLockedGraphics.fillRect(0, 0, 8, 64);
  doorLockedGraphics.fillRect(40, 0, 8, 64);
  // Lock icon (red)
  doorLockedGraphics.fillStyle(0xff4444);
  doorLockedGraphics.fillCircle(24, 32, 8);
  doorLockedGraphics.fillStyle(0x0a1f0a);
  doorLockedGraphics.fillRect(20, 28, 8, 8);
  doorLockedGraphics.generateTexture('door_locked', 48, 64);
  doorLockedGraphics.destroy();
  
  // Door (unlocked) - green with open indicator
  const doorUnlockedGraphics = this.add.graphics();
  doorUnlockedGraphics.fillStyle(0x8B4513);
  doorUnlockedGraphics.fillRect(0, 0, 48, 64);
  doorUnlockedGraphics.lineStyle(3, 0x00ff88);
  doorUnlockedGraphics.strokeRect(0, 0, 48, 64);
  // Door frame
  doorUnlockedGraphics.fillStyle(0x654321);
  doorUnlockedGraphics.fillRect(0, 0, 48, 8);
  doorUnlockedGraphics.fillRect(0, 56, 48, 8);
  doorUnlockedGraphics.fillRect(0, 0, 8, 64);
  doorUnlockedGraphics.fillRect(40, 0, 8, 64);
  // Unlock indicator (green checkmark)
  doorUnlockedGraphics.fillStyle(0x00ff88);
  doorUnlockedGraphics.fillCircle(24, 32, 8);
  doorUnlockedGraphics.lineStyle(3, 0x0a1f0a);
  doorUnlockedGraphics.beginPath();
  doorUnlockedGraphics.moveTo(20, 32);
  doorUnlockedGraphics.lineTo(23, 35);
  doorUnlockedGraphics.lineTo(28, 28);
  doorUnlockedGraphics.strokePath();
  doorUnlockedGraphics.generateTexture('door_unlocked', 48, 64);
  doorUnlockedGraphics.destroy();
}

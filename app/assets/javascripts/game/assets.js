// Asset loading and sprite creation
function preload() {
  // Create sweet potato player (cute orange/brown potato)
  const playerGraphics = this.add.graphics();
  // Main body (orange/brown sweet potato shape - elongated oval)
  playerGraphics.fillStyle(0xD2691E); // Orange-brown
  playerGraphics.fillEllipse(16, 16, 20, 24);
  // Highlights (lighter orange)
  playerGraphics.fillStyle(0xE67E22);
  playerGraphics.fillEllipse(16, 14, 16, 20);
  // Texture/details (small dots for potato skin)
  playerGraphics.fillStyle(0xB8860B);
  playerGraphics.fillCircle(12, 12, 1.5);
  playerGraphics.fillCircle(20, 10, 1);
  playerGraphics.fillCircle(18, 18, 1.2);
  playerGraphics.fillCircle(14, 22, 1);
  playerGraphics.fillCircle(22, 20, 1.3);
  // Cute face (two dots for eyes, smile)
  playerGraphics.fillStyle(0x0a1f0a);
  playerGraphics.fillCircle(13, 16, 1.5);
  playerGraphics.fillCircle(19, 16, 1.5);
  // Smile
  playerGraphics.lineStyle(2, 0x0a1f0a);
  playerGraphics.beginPath();
  playerGraphics.arc(16, 20, 3, 0, Math.PI);
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
  
  // Hot pot (locked/cold) - empty pot, no steam
  const doorLockedGraphics = this.add.graphics();
  // Pot base (dark gray/black metal)
  doorLockedGraphics.fillStyle(0x2C2C2C);
  doorLockedGraphics.fillEllipse(24, 50, 40, 20);
  // Pot body (dark gray)
  doorLockedGraphics.fillStyle(0x3C3C3C);
  doorLockedGraphics.fillEllipse(24, 40, 36, 24);
  // Pot rim (lighter gray)
  doorLockedGraphics.fillStyle(0x4C4C4C);
  doorLockedGraphics.fillEllipse(24, 28, 38, 8);
  // Pot handles (small circles on sides)
  doorLockedGraphics.fillStyle(0x2C2C2C);
  doorLockedGraphics.fillCircle(8, 32, 4);
  doorLockedGraphics.fillCircle(40, 32, 4);
  // Empty pot indicator (dark inside)
  doorLockedGraphics.fillStyle(0x1a1a1a);
  doorLockedGraphics.fillEllipse(24, 40, 30, 18);
  // Lock icon (red lock on pot)
  doorLockedGraphics.fillStyle(0xff4444);
  doorLockedGraphics.fillCircle(24, 20, 6);
  doorLockedGraphics.fillStyle(0x0a1f0a);
  doorLockedGraphics.fillRect(21, 17, 6, 6);
  doorLockedGraphics.generateTexture('door_locked', 48, 64);
  doorLockedGraphics.destroy();
  
  // Hot pot (unlocked/hot) - steaming pot with bubbles
  const doorUnlockedGraphics = this.add.graphics();
  // Pot base (dark gray/black metal)
  doorUnlockedGraphics.fillStyle(0x2C2C2C);
  doorUnlockedGraphics.fillEllipse(24, 50, 40, 20);
  // Pot body (dark gray, slightly glowing)
  doorUnlockedGraphics.fillStyle(0x4C4C4C);
  doorUnlockedGraphics.fillEllipse(24, 40, 36, 24);
  // Pot rim (lighter gray)
  doorUnlockedGraphics.fillStyle(0x5C5C5C);
  doorUnlockedGraphics.fillEllipse(24, 28, 38, 8);
  // Pot handles (small circles on sides)
  doorUnlockedGraphics.fillStyle(0x2C2C2C);
  doorUnlockedGraphics.fillCircle(8, 32, 4);
  doorUnlockedGraphics.fillCircle(40, 32, 4);
  // Hot liquid inside (orange/red, bubbling)
  doorUnlockedGraphics.fillStyle(0xFF4500);
  doorUnlockedGraphics.fillEllipse(24, 40, 30, 18);
  // Bubbles in the pot
  doorUnlockedGraphics.fillStyle(0xFF6B35);
  doorUnlockedGraphics.fillCircle(18, 36, 2);
  doorUnlockedGraphics.fillCircle(24, 38, 2.5);
  doorUnlockedGraphics.fillCircle(30, 36, 2);
  doorUnlockedGraphics.fillCircle(20, 42, 2);
  doorUnlockedGraphics.fillCircle(28, 42, 2);
  // Steam (white wispy lines coming out)
  doorUnlockedGraphics.lineStyle(3, 0xFFFFFF);
  doorUnlockedGraphics.beginPath();
  doorUnlockedGraphics.moveTo(18, 20);
  doorUnlockedGraphics.lineTo(16, 8);
  doorUnlockedGraphics.strokePath();
  doorUnlockedGraphics.beginPath();
  doorUnlockedGraphics.moveTo(24, 18);
  doorUnlockedGraphics.lineTo(24, 6);
  doorUnlockedGraphics.strokePath();
  doorUnlockedGraphics.beginPath();
  doorUnlockedGraphics.moveTo(30, 20);
  doorUnlockedGraphics.lineTo(32, 8);
  doorUnlockedGraphics.strokePath();
  // Steam puffs (small circles)
  doorUnlockedGraphics.fillStyle(0xFFFFFF);
  doorUnlockedGraphics.fillCircle(16, 6, 2);
  doorUnlockedGraphics.fillCircle(24, 4, 2.5);
  doorUnlockedGraphics.fillCircle(32, 6, 2);
  doorUnlockedGraphics.generateTexture('door_unlocked', 48, 64);
  doorUnlockedGraphics.destroy();
}

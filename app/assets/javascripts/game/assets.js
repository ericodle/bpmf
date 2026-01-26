// Asset loading and sprite creation
function preload() {
  // Create purple yam player (cute purple sweet potato - irregular shape)
  const playerGraphics = this.add.graphics();
  // Main body (irregular purple yam shape - using path for organic look)
  playerGraphics.fillStyle(0x8B4C89); // Deep purple
  playerGraphics.beginPath();
  // Create irregular, lumpy shape
  playerGraphics.moveTo(8, 10);
  playerGraphics.lineTo(6, 14);
  playerGraphics.lineTo(8, 18);
  playerGraphics.lineTo(10, 22);
  playerGraphics.lineTo(12, 26);
  playerGraphics.lineTo(14, 28);
  playerGraphics.lineTo(16, 30);
  playerGraphics.lineTo(18, 28);
  playerGraphics.lineTo(20, 26);
  playerGraphics.lineTo(22, 24);
  playerGraphics.lineTo(24, 20);
  playerGraphics.lineTo(26, 16);
  playerGraphics.lineTo(24, 12);
  playerGraphics.lineTo(22, 10);
  playerGraphics.lineTo(20, 8);
  playerGraphics.lineTo(18, 6);
  playerGraphics.lineTo(16, 5);
  playerGraphics.lineTo(14, 6);
  playerGraphics.lineTo(12, 8);
  playerGraphics.lineTo(10, 9);
  playerGraphics.closePath();
  playerGraphics.fillPath();
  
  // Highlights (lighter purple - irregular patches)
  playerGraphics.fillStyle(0xA569A5);
  playerGraphics.fillEllipse(14, 12, 8, 10);
  playerGraphics.fillEllipse(18, 20, 6, 8);
  playerGraphics.fillEllipse(10, 22, 5, 6);
  
  // Texture/details (small dots for yam skin - darker purple)
  playerGraphics.fillStyle(0x6B2C69);
  playerGraphics.fillCircle(11, 11, 1.2);
  playerGraphics.fillCircle(21, 9, 1);
  playerGraphics.fillCircle(17, 17, 1.1);
  playerGraphics.fillCircle(13, 23, 1);
  playerGraphics.fillCircle(23, 21, 1.2);
  playerGraphics.fillCircle(9, 19, 0.8);
  playerGraphics.fillCircle(19, 25, 0.9);
  
  // Cute face (two dots for eyes, smile)
  playerGraphics.fillStyle(0xFFFFFF);
  playerGraphics.fillCircle(13, 16, 1.5);
  playerGraphics.fillCircle(19, 16, 1.5);
  // Smile
  playerGraphics.lineStyle(2, 0xFFFFFF);
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
  
  // Taiwanese-style background tiles (traditional tile pattern - darker)
  const tileGraphics = this.add.graphics();
  // Base color (darker warm beige/cream like traditional tiles)
  tileGraphics.fillStyle(0xC4B5A0);
  tileGraphics.fillRect(0, 0, 32, 32);
  // Traditional pattern overlay (subtle grid - darker)
  tileGraphics.lineStyle(1, 0xB8A890);
  tileGraphics.strokeRect(0, 0, 32, 32);
  // Add some texture/depth (darker)
  tileGraphics.fillStyle(0xBFAE96);
  tileGraphics.fillRect(0, 0, 16, 16);
  tileGraphics.fillRect(16, 16, 16, 16);
  tileGraphics.generateTexture('tile', 32, 32);
  tileGraphics.destroy();
  
  // Decorative lantern texture (for background elements)
  const lanternGraphics = this.add.graphics();
  // Red lantern body
  lanternGraphics.fillStyle(0xDC143C);
  lanternGraphics.fillEllipse(16, 16, 20, 24);
  // Gold trim
  lanternGraphics.lineStyle(2, 0xFFD700);
  lanternGraphics.strokeEllipse(16, 16, 20, 24);
  // Gold tassel at bottom
  lanternGraphics.fillStyle(0xFFD700);
  lanternGraphics.fillRect(14, 28, 4, 8);
  lanternGraphics.generateTexture('lantern', 32, 40);
  lanternGraphics.destroy();
  
  // Particle texture for floating elements
  const particleGraphics = this.add.graphics();
  particleGraphics.fillStyle(0xFFE4B5);
  particleGraphics.fillCircle(4, 4, 3);
  particleGraphics.generateTexture('particle', 8, 8);
  particleGraphics.destroy();
  
  // Cute Bubble Tea NPC
  const bubbleTeaGraphics = this.add.graphics();
  // Cup (clear/white)
  bubbleTeaGraphics.fillStyle(0xFFFFFF);
  bubbleTeaGraphics.fillRect(8, 12, 16, 20);
  bubbleTeaGraphics.lineStyle(2, 0xDDDDDD);
  bubbleTeaGraphics.strokeRect(8, 12, 16, 20);
  // Liquid (brown tea)
  bubbleTeaGraphics.fillStyle(0x8B4513);
  bubbleTeaGraphics.fillRect(10, 14, 12, 16);
  // Bubbles (white circles)
  bubbleTeaGraphics.fillStyle(0xFFFFFF);
  bubbleTeaGraphics.fillCircle(14, 18, 2);
  bubbleTeaGraphics.fillCircle(18, 22, 2.5);
  bubbleTeaGraphics.fillCircle(16, 26, 2);
  // Straw (pink)
  bubbleTeaGraphics.fillStyle(0xFF69B4);
  bubbleTeaGraphics.fillRect(15, 6, 2, 8);
  // Cute face
  bubbleTeaGraphics.fillStyle(0x0a1f0a);
  bubbleTeaGraphics.fillCircle(13, 20, 1);
  bubbleTeaGraphics.fillCircle(19, 20, 1);
  bubbleTeaGraphics.lineStyle(1.5, 0x0a1f0a);
  bubbleTeaGraphics.beginPath();
  bubbleTeaGraphics.arc(16, 24, 2, 0, Math.PI);
  bubbleTeaGraphics.strokePath();
  bubbleTeaGraphics.generateTexture('bubble_tea_npc', 32, 32);
  bubbleTeaGraphics.destroy();
  
  // Cute Pineapple Cake NPC
  const pineappleCakeGraphics = this.add.graphics();
  // Base (golden yellow square)
  pineappleCakeGraphics.fillStyle(0xFFD700);
  pineappleCakeGraphics.fillRect(6, 10, 20, 20);
  pineappleCakeGraphics.lineStyle(2, 0xFFA500);
  pineappleCakeGraphics.strokeRect(6, 10, 20, 20);
  // Pattern (grid lines like traditional pineapple cake)
  pineappleCakeGraphics.lineStyle(1, 0xFFA500);
  pineappleCakeGraphics.strokeRect(8, 12, 16, 16);
  pineappleCakeGraphics.beginPath();
  pineappleCakeGraphics.moveTo(16, 12);
  pineappleCakeGraphics.lineTo(16, 28);
  pineappleCakeGraphics.strokePath();
  pineappleCakeGraphics.beginPath();
  pineappleCakeGraphics.moveTo(8, 20);
  pineappleCakeGraphics.lineTo(24, 20);
  pineappleCakeGraphics.strokePath();
  // Cute face
  pineappleCakeGraphics.fillStyle(0x0a1f0a);
  pineappleCakeGraphics.fillCircle(13, 18, 1.5);
  pineappleCakeGraphics.fillCircle(19, 18, 1.5);
  pineappleCakeGraphics.lineStyle(2, 0x0a1f0a);
  pineappleCakeGraphics.beginPath();
  pineappleCakeGraphics.arc(16, 22, 3, 0, Math.PI);
  pineappleCakeGraphics.strokePath();
  pineappleCakeGraphics.generateTexture('pineapple_cake_npc', 32, 32);
  pineappleCakeGraphics.destroy();
  
  // Cute Stinky Tofu NPC (cute version!)
  const stinkyTofuGraphics = this.add.graphics();
  // Tofu block (white/beige)
  stinkyTofuGraphics.fillStyle(0xF5F5DC);
  stinkyTofuGraphics.fillRect(8, 10, 16, 20);
  stinkyTofuGraphics.lineStyle(2, 0xDDDDDD);
  stinkyTofuGraphics.strokeRect(8, 10, 16, 20);
  // Texture (small dots)
  stinkyTofuGraphics.fillStyle(0xE8E8D3);
  stinkyTofuGraphics.fillCircle(12, 16, 1);
  stinkyTofuGraphics.fillCircle(20, 18, 1);
  stinkyTofuGraphics.fillCircle(14, 22, 1);
  stinkyTofuGraphics.fillCircle(18, 24, 1);
  // Cute face
  stinkyTofuGraphics.fillStyle(0x0a1f0a);
  stinkyTofuGraphics.fillCircle(13, 18, 1.5);
  stinkyTofuGraphics.fillCircle(19, 18, 1.5);
  stinkyTofuGraphics.lineStyle(2, 0x0a1f0a);
  stinkyTofuGraphics.beginPath();
  stinkyTofuGraphics.arc(16, 22, 3, 0, Math.PI);
  stinkyTofuGraphics.strokePath();
  // Steam lines (cute wavy lines)
  stinkyTofuGraphics.lineStyle(2, 0xCCCCCC);
  stinkyTofuGraphics.beginPath();
  stinkyTofuGraphics.moveTo(12, 8);
  stinkyTofuGraphics.lineTo(10, 4);
  stinkyTofuGraphics.strokePath();
  stinkyTofuGraphics.beginPath();
  stinkyTofuGraphics.moveTo(16, 8);
  stinkyTofuGraphics.lineTo(16, 4);
  stinkyTofuGraphics.strokePath();
  stinkyTofuGraphics.beginPath();
  stinkyTofuGraphics.moveTo(20, 8);
  stinkyTofuGraphics.lineTo(22, 4);
  stinkyTofuGraphics.strokePath();
  stinkyTofuGraphics.generateTexture('stinky_tofu_npc', 32, 32);
  stinkyTofuGraphics.destroy();
  
  // Cute Oyster Omelette NPC
  const oysterOmeletteGraphics = this.add.graphics();
  // Omelette base (yellow circle)
  oysterOmeletteGraphics.fillStyle(0xFFE135);
  oysterOmeletteGraphics.fillEllipse(16, 16, 24, 20);
  // Oysters (small gray circles)
  oysterOmeletteGraphics.fillStyle(0x808080);
  oysterOmeletteGraphics.fillCircle(12, 14, 2);
  oysterOmeletteGraphics.fillCircle(20, 16, 2);
  oysterOmeletteGraphics.fillCircle(14, 20, 2);
  oysterOmeletteGraphics.fillCircle(22, 18, 2);
  // Cute face
  oysterOmeletteGraphics.fillStyle(0x0a1f0a);
  oysterOmeletteGraphics.fillCircle(13, 16, 1.5);
  oysterOmeletteGraphics.fillCircle(19, 16, 1.5);
  oysterOmeletteGraphics.lineStyle(2, 0x0a1f0a);
  oysterOmeletteGraphics.beginPath();
  oysterOmeletteGraphics.arc(16, 20, 3, 0, Math.PI);
  oysterOmeletteGraphics.strokePath();
  oysterOmeletteGraphics.generateTexture('oyster_omelette_npc', 32, 32);
  oysterOmeletteGraphics.destroy();
  
  // Asian cauldron (locked/cold) - empty traditional cauldron
  const doorLockedGraphics = this.add.graphics();
  // Cauldron base (wide, dark bronze/copper)
  doorLockedGraphics.fillStyle(0x8B4513); // Dark bronze
  doorLockedGraphics.fillEllipse(24, 58, 44, 12);
  // Cauldron body (rounded, traditional shape)
  doorLockedGraphics.fillStyle(0x6B3410); // Darker bronze
  doorLockedGraphics.fillEllipse(24, 42, 40, 28);
  // Cauldron rim (thicker, decorative rim)
  doorLockedGraphics.fillStyle(0x9B5520); // Lighter bronze
  doorLockedGraphics.fillEllipse(24, 26, 42, 10);
  // Inner rim highlight
  doorLockedGraphics.fillStyle(0x7B4515);
  doorLockedGraphics.fillEllipse(24, 26, 38, 6);
  // Traditional handles (curved, on sides)
  doorLockedGraphics.lineStyle(4, 0x5B3410);
  doorLockedGraphics.beginPath();
  doorLockedGraphics.arc(6, 30, 8, 0, Math.PI, true);
  doorLockedGraphics.strokePath();
  doorLockedGraphics.beginPath();
  doorLockedGraphics.arc(42, 30, 8, 0, Math.PI, false);
  doorLockedGraphics.strokePath();
  // Handle attachment points
  doorLockedGraphics.fillStyle(0x5B3410);
  doorLockedGraphics.fillCircle(6, 30, 3);
  doorLockedGraphics.fillCircle(42, 30, 3);
  // Empty cauldron indicator (dark inside)
  doorLockedGraphics.fillStyle(0x1a1a1a);
  doorLockedGraphics.fillEllipse(24, 42, 34, 22);
  doorLockedGraphics.generateTexture('door_locked', 48, 64);
  doorLockedGraphics.destroy();
  
  // Asian cauldron (unlocked/hot) - steaming cauldron with bubbles
  const doorUnlockedGraphics = this.add.graphics();
  // Cauldron base (wide, dark bronze/copper)
  doorUnlockedGraphics.fillStyle(0x8B4513); // Dark bronze
  doorUnlockedGraphics.fillEllipse(24, 58, 44, 12);
  // Cauldron body (rounded, traditional shape, slightly glowing when hot)
  doorUnlockedGraphics.fillStyle(0x7B4515); // Warmer bronze
  doorUnlockedGraphics.fillEllipse(24, 42, 40, 28);
  // Cauldron rim (thicker, decorative rim, glowing)
  doorUnlockedGraphics.fillStyle(0xAB6520); // Lighter, warmer bronze
  doorUnlockedGraphics.fillEllipse(24, 26, 42, 10);
  // Inner rim highlight (glowing)
  doorUnlockedGraphics.fillStyle(0x9B5520);
  doorUnlockedGraphics.fillEllipse(24, 26, 38, 6);
  // Traditional handles (curved, on sides)
  doorUnlockedGraphics.lineStyle(4, 0x6B3410);
  doorUnlockedGraphics.beginPath();
  doorUnlockedGraphics.arc(6, 30, 8, 0, Math.PI, true);
  doorUnlockedGraphics.strokePath();
  doorUnlockedGraphics.beginPath();
  doorUnlockedGraphics.arc(42, 30, 8, 0, Math.PI, false);
  doorUnlockedGraphics.strokePath();
  // Handle attachment points
  doorUnlockedGraphics.fillStyle(0x6B3410);
  doorUnlockedGraphics.fillCircle(6, 30, 3);
  doorUnlockedGraphics.fillCircle(42, 30, 3);
  // Hot liquid inside (orange/red, bubbling)
  doorUnlockedGraphics.fillStyle(0xFF4500);
  doorUnlockedGraphics.fillEllipse(24, 42, 34, 22);
  // Bubbles in the cauldron
  doorUnlockedGraphics.fillStyle(0xFF6B35);
  doorUnlockedGraphics.fillCircle(18, 38, 2.5);
  doorUnlockedGraphics.fillCircle(24, 40, 3);
  doorUnlockedGraphics.fillCircle(30, 38, 2.5);
  doorUnlockedGraphics.fillCircle(20, 44, 2);
  doorUnlockedGraphics.fillCircle(28, 44, 2);
  doorUnlockedGraphics.fillCircle(22, 46, 2);
  // Steam (white wispy lines coming out - more dramatic)
  doorUnlockedGraphics.lineStyle(4, 0xFFFFFF);
  doorUnlockedGraphics.beginPath();
  doorUnlockedGraphics.moveTo(18, 22);
  doorUnlockedGraphics.lineTo(14, 4);
  doorUnlockedGraphics.strokePath();
  doorUnlockedGraphics.beginPath();
  doorUnlockedGraphics.moveTo(24, 20);
  doorUnlockedGraphics.lineTo(24, 2);
  doorUnlockedGraphics.strokePath();
  doorUnlockedGraphics.beginPath();
  doorUnlockedGraphics.moveTo(30, 22);
  doorUnlockedGraphics.lineTo(34, 4);
  doorUnlockedGraphics.strokePath();
  // Additional steam wisps
  doorUnlockedGraphics.lineStyle(3, 0xFFFFFF);
  doorUnlockedGraphics.beginPath();
  doorUnlockedGraphics.moveTo(16, 24);
  doorUnlockedGraphics.lineTo(12, 8);
  doorUnlockedGraphics.strokePath();
  doorUnlockedGraphics.beginPath();
  doorUnlockedGraphics.moveTo(32, 24);
  doorUnlockedGraphics.lineTo(36, 8);
  doorUnlockedGraphics.strokePath();
  // Steam puffs (larger, more dramatic)
  doorUnlockedGraphics.fillStyle(0xFFFFFF);
  doorUnlockedGraphics.fillCircle(14, 4, 3);
  doorUnlockedGraphics.fillCircle(24, 2, 4);
  doorUnlockedGraphics.fillCircle(34, 4, 3);
  doorUnlockedGraphics.fillCircle(12, 6, 2);
  doorUnlockedGraphics.fillCircle(36, 6, 2);
  doorUnlockedGraphics.generateTexture('door_unlocked', 48, 64);
  doorUnlockedGraphics.destroy();
}

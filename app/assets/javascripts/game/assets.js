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
  
  // Pixel art rewards for each level (Taiwanese-themed)
  createLevelRewards(this);
  
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

function createLevelRewards(scene) {
  // Level 1: Night Market Stall (intricate)
  const reward1 = scene.add.graphics();
  // Sky background
  reward1.fillStyle(0x1a1a2e);
  reward1.fillRect(0, 0, 64, 52);
  // Stars
  reward1.fillStyle(0xFFFFFF);
  reward1.fillRect(8, 4, 1, 1);
  reward1.fillRect(24, 2, 1, 1);
  reward1.fillRect(40, 5, 1, 1);
  reward1.fillRect(56, 3, 1, 1);
  // Orange roof with tiles
  reward1.fillStyle(0xFF6B35);
  reward1.fillRect(0, 0, 64, 14);
  reward1.fillStyle(0xFF4500); // Darker tiles
  for (let i = 0; i < 8; i++) {
    reward1.fillRect(i * 8, 0, 4, 14);
  }
  // Roof edge detail
  reward1.fillStyle(0xFF4500);
  reward1.fillRect(0, 12, 64, 2);
  // Stall structure
  reward1.fillStyle(0x8B4513); // Brown stall
  reward1.fillRect(4, 14, 56, 38);
  reward1.fillStyle(0x654321); // Darker brown frame
  reward1.fillRect(4, 14, 56, 4);
  reward1.fillRect(4, 48, 56, 4);
  reward1.fillRect(4, 14, 4, 38);
  reward1.fillRect(56, 14, 4, 38);
  // Gold sign with Chinese characters pattern
  reward1.fillStyle(0xFFD700);
  reward1.fillRect(18, 18, 28, 10);
  reward1.fillStyle(0xFFA500); // Sign border
  reward1.fillRect(18, 18, 28, 2);
  reward1.fillRect(18, 26, 28, 2);
  reward1.fillRect(18, 18, 2, 10);
  reward1.fillRect(44, 18, 2, 10);
  // Red lanterns with details
  reward1.fillStyle(0xFF0000);
  reward1.fillCircle(10, 30, 5);
  reward1.fillCircle(54, 30, 5);
  reward1.fillStyle(0xFFD700); // Gold trim
  reward1.lineStyle(1, 0xFFD700);
  reward1.strokeCircle(10, 30, 5);
  reward1.strokeCircle(54, 30, 5);
  // Lantern tassels
  reward1.fillStyle(0xFFD700);
  reward1.fillRect(9, 35, 2, 8);
  reward1.fillRect(53, 35, 2, 8);
  // Food items on counter
  reward1.fillStyle(0xFFE135); // Yellow food
  reward1.fillRect(12, 32, 6, 4);
  reward1.fillRect(46, 32, 6, 4);
  reward1.fillStyle(0xFF6B35); // Orange food
  reward1.fillRect(20, 34, 5, 3);
  reward1.fillRect(39, 34, 5, 3);
  // Counter detail
  reward1.fillStyle(0x654321);
  reward1.fillRect(8, 38, 48, 2);
  reward1.generateTexture('reward_level_1', 64, 52);
  reward1.destroy();
  
  // Level 2: Bubble Tea Shop (intricate)
  const reward2 = scene.add.graphics();
  // Sky gradient
  reward2.fillStyle(0x87CEEB); // Light blue
  reward2.fillRect(0, 0, 64, 30);
  reward2.fillStyle(0x4682B4); // Medium blue
  reward2.fillRect(0, 30, 64, 22);
  // Clouds
  reward2.fillStyle(0xFFFFFF);
  reward2.fillCircle(16, 8, 4);
  reward2.fillCircle(20, 8, 4);
  reward2.fillCircle(48, 12, 3);
  reward2.fillCircle(51, 12, 3);
  // Shop building
  reward2.fillStyle(0xFFFFFF); // White shop front
  reward2.fillRect(6, 18, 52, 34);
  reward2.fillStyle(0xE0E0E0); // Light gray frame
  reward2.fillRect(6, 18, 52, 3);
  reward2.fillRect(6, 49, 52, 3);
  reward2.fillRect(6, 18, 3, 34);
  reward2.fillRect(55, 18, 3, 34);
  // Window
  reward2.fillStyle(0xADD8E6);
  reward2.fillRect(12, 24, 20, 16);
  reward2.fillStyle(0x000000); // Window frame
  reward2.fillRect(12, 24, 20, 2);
  reward2.fillRect(12, 38, 20, 2);
  reward2.fillRect(12, 24, 2, 16);
  reward2.fillRect(30, 24, 2, 16);
  reward2.fillRect(21, 24, 2, 16); // Vertical divider
  // Bubble tea display (multiple cups)
  reward2.fillStyle(0xFF69B4); // Pink tea
  reward2.fillRect(36, 22, 12, 18);
  reward2.fillRect(50, 22, 8, 18);
  reward2.fillStyle(0xFFFFFF); // Bubbles
  reward2.fillCircle(39, 26, 2);
  reward2.fillCircle(43, 30, 2);
  reward2.fillCircle(41, 34, 1.5);
  reward2.fillCircle(52, 26, 1.5);
  reward2.fillCircle(55, 30, 1.5);
  // Straws
  reward2.fillStyle(0xFF1493);
  reward2.fillRect(41, 18, 2, 6);
  reward2.fillRect(53, 18, 2, 6);
  // Gold sign with text pattern
  reward2.fillStyle(0xFFD700);
  reward2.fillRect(14, 42, 36, 8);
  reward2.fillStyle(0xFFA500); // Border
  reward2.fillRect(14, 42, 36, 2);
  reward2.fillRect(14, 48, 36, 2);
  reward2.fillRect(14, 42, 2, 8);
  reward2.fillRect(48, 42, 2, 8);
  // Decorative pattern on sign
  reward2.fillStyle(0xFFA500);
  reward2.fillRect(20, 44, 2, 4);
  reward2.fillRect(26, 44, 2, 4);
  reward2.fillRect(32, 44, 2, 4);
  reward2.fillRect(38, 44, 2, 4);
  reward2.fillRect(44, 44, 2, 4);
  reward2.generateTexture('reward_level_2', 64, 52);
  reward2.destroy();
  
  // Level 3: Traditional Temple (intricate)
  const reward3 = scene.add.graphics();
  // Sky
  reward3.fillStyle(0x87CEEB);
  reward3.fillRect(0, 0, 64, 52);
  // Red curved roof with tiles
  reward3.fillStyle(0xDC143C);
  reward3.fillTriangle(32, 0, 0, 18, 64, 18);
  // Roof tiles detail
  reward3.fillStyle(0xB22222);
  for (let i = 0; i < 16; i++) {
    const x = i * 4;
    const y = 2 + Math.abs(x - 32) * 0.1;
    reward3.fillRect(x, y, 2, 2);
  }
  // Gold roof edge
  reward3.fillStyle(0xFFD700);
  reward3.fillRect(0, 16, 64, 2);
  // Temple body
  reward3.fillStyle(0xFFD700); // Gold/yellow walls
  reward3.fillRect(4, 18, 56, 34);
  // Wall pattern
  reward3.fillStyle(0xFFA500);
  for (let i = 0; i < 7; i++) {
    reward3.fillRect(8 + i * 8, 20, 4, 2);
    reward3.fillRect(8 + i * 8, 48, 4, 2);
  }
  // Red columns with details
  reward3.fillStyle(0x8B4513); // Brown base
  reward3.fillRect(10, 22, 10, 30);
  reward3.fillRect(44, 22, 10, 30);
  reward3.fillStyle(0xDC143C); // Red column
  reward3.fillRect(12, 24, 6, 26);
  reward3.fillRect(46, 24, 6, 26);
  // Column decorations
  reward3.fillStyle(0xFFD700);
  reward3.fillRect(12, 24, 6, 3);
  reward3.fillRect(46, 24, 6, 3);
  reward3.fillRect(12, 47, 6, 3);
  reward3.fillRect(46, 47, 6, 3);
  // Red door with details
  reward3.fillStyle(0x8B0000);
  reward3.fillRect(24, 30, 16, 22);
  reward3.fillStyle(0xFF0000); // Lighter red
  reward3.fillRect(26, 32, 12, 18);
  // Door decorations
  reward3.fillStyle(0xFFD700);
  reward3.fillRect(28, 34, 8, 2);
  reward3.fillRect(28, 38, 8, 2);
  reward3.fillRect(28, 42, 8, 2);
  reward3.fillRect(28, 46, 8, 2);
  // Door handles
  reward3.fillStyle(0xFFD700);
  reward3.fillCircle(30, 40, 1.5);
  reward3.fillCircle(34, 40, 1.5);
  // Steps
  reward3.fillStyle(0x696969);
  reward3.fillRect(20, 50, 24, 2);
  reward3.fillRect(22, 52, 20, 2);
  reward3.generateTexture('reward_level_3', 64, 52);
  reward3.destroy();
  
  // Level 4: Pineapple Cake Box
  const reward4 = scene.add.graphics();
  reward4.fillStyle(0xFFD700); // Gold box
  reward4.fillRect(8, 8, 48, 36);
  reward4.fillStyle(0xFFA500); // Orange pattern
  reward4.fillRect(12, 12, 40, 28);
  reward4.fillStyle(0xFFD700); // Grid lines
  reward4.lineStyle(1, 0xFFD700);
  reward4.strokeRect(12, 12, 40, 28);
  reward4.beginPath();
  reward4.moveTo(32, 12);
  reward4.lineTo(32, 40);
  reward4.strokePath();
  reward4.beginPath();
  reward4.moveTo(12, 26);
  reward4.lineTo(52, 26);
  reward4.strokePath();
  reward4.fillStyle(0xFF0000); // Red ribbon
  reward4.fillRect(20, 4, 24, 4);
  reward4.generateTexture('reward_level_4', 64, 52);
  reward4.destroy();
  
  // Level 5: Stinky Tofu Cart (intricate)
  const reward5 = scene.add.graphics();
  // Background
  reward5.fillStyle(0x2F4F4F);
  reward5.fillRect(0, 0, 64, 52);
  // Cart base
  reward5.fillStyle(0x8B4513); // Brown cart
  reward5.fillRect(4, 28, 56, 24);
  // Cart wheels
  reward5.fillStyle(0x000000);
  reward5.fillCircle(12, 50, 4);
  reward5.fillCircle(52, 50, 4);
  reward5.fillStyle(0x696969); // Wheel rims
  reward5.fillCircle(12, 50, 2.5);
  reward5.fillCircle(52, 50, 2.5);
  // Cart structure
  reward5.fillStyle(0x654321); // Darker brown
  reward5.fillRect(6, 26, 52, 2);
  reward5.fillRect(6, 28, 2, 24);
  reward5.fillRect(58, 28, 2, 24);
  // Cooking surface
  reward5.fillStyle(0x708090);
  reward5.fillRect(8, 20, 48, 8);
  // Tofu blocks with detail
  reward5.fillStyle(0xF5F5DC); // Beige tofu
  reward5.fillRect(12, 14, 10, 10);
  reward5.fillRect(28, 14, 10, 10);
  reward5.fillRect(44, 14, 10, 10);
  // Tofu texture
  reward5.fillStyle(0xE6E6D3);
  reward5.fillRect(13, 15, 8, 8);
  reward5.fillRect(29, 15, 8, 8);
  reward5.fillRect(45, 15, 8, 8);
  // Tofu grid pattern
  reward5.fillStyle(0xD3D3C3);
  reward5.fillRect(14, 16, 2, 2);
  reward5.fillRect(17, 16, 2, 2);
  reward5.fillRect(20, 16, 2, 2);
  reward5.fillRect(14, 19, 2, 2);
  reward5.fillRect(17, 19, 2, 2);
  reward5.fillRect(20, 19, 2, 2);
  // Repeat for other blocks
  reward5.fillRect(30, 16, 2, 2);
  reward5.fillRect(33, 16, 2, 2);
  reward5.fillRect(36, 16, 2, 2);
  reward5.fillRect(30, 19, 2, 2);
  reward5.fillRect(33, 19, 2, 2);
  reward5.fillRect(36, 19, 2, 2);
  reward5.fillRect(46, 16, 2, 2);
  reward5.fillRect(49, 16, 2, 2);
  reward5.fillRect(52, 16, 2, 2);
  reward5.fillRect(46, 19, 2, 2);
  reward5.fillRect(49, 19, 2, 2);
  reward5.fillRect(52, 19, 2, 2);
  // Steam (more detailed)
  reward5.fillStyle(0xCCCCCC);
  reward5.fillCircle(17, 10, 2);
  reward5.fillCircle(20, 8, 2);
  reward5.fillCircle(33, 8, 2);
  reward5.fillCircle(36, 6, 2);
  reward5.fillCircle(49, 10, 2);
  reward5.fillCircle(52, 8, 2);
  // Lighter steam
  reward5.fillStyle(0xE0E0E0);
  reward5.fillCircle(18, 9, 1.5);
  reward5.fillCircle(34, 7, 1.5);
  reward5.fillCircle(50, 9, 1.5);
  // Red sign with details
  reward5.fillStyle(0xFF0000);
  reward5.fillRect(14, 4, 36, 10);
  reward5.fillStyle(0x8B0000); // Border
  reward5.fillRect(14, 4, 36, 2);
  reward5.fillRect(14, 12, 36, 2);
  reward5.fillRect(14, 4, 2, 10);
  reward5.fillRect(48, 4, 2, 10);
  // Sign text pattern
  reward5.fillStyle(0xFFD700);
  reward5.fillRect(18, 6, 4, 2);
  reward5.fillRect(24, 6, 4, 2);
  reward5.fillRect(30, 6, 4, 2);
  reward5.fillRect(36, 6, 4, 2);
  reward5.fillRect(42, 6, 4, 2);
  reward5.fillRect(20, 9, 2, 2);
  reward5.fillRect(26, 9, 2, 2);
  reward5.fillRect(32, 9, 2, 2);
  reward5.fillRect(38, 9, 2, 2);
  reward5.fillRect(44, 9, 2, 2);
  reward5.generateTexture('reward_level_5', 64, 52);
  reward5.destroy();
  
  // Level 6: Sun Moon Lake (intricate)
  const reward6 = scene.add.graphics();
  // Sky gradient
  reward6.fillStyle(0x87CEEB); // Light blue
  reward6.fillRect(0, 0, 64, 20);
  reward6.fillStyle(0x4682B4); // Medium blue
  reward6.fillRect(0, 20, 64, 8);
  // Clouds
  reward6.fillStyle(0xFFFFFF);
  reward6.fillCircle(8, 6, 3);
  reward6.fillCircle(11, 6, 3);
  reward6.fillCircle(9, 4, 2);
  reward6.fillCircle(40, 8, 2.5);
  reward6.fillCircle(42, 8, 2.5);
  // Mountains with layers
  reward6.fillStyle(0x2F4F2F); // Dark green (far mountains)
  reward6.fillTriangle(0, 28, 16, 20, 32, 28);
  reward6.fillTriangle(32, 28, 48, 20, 64, 28);
  reward6.fillStyle(0x228B22); // Medium green (middle mountains)
  reward6.fillTriangle(0, 28, 20, 16, 40, 28);
  reward6.fillTriangle(24, 28, 44, 16, 64, 28);
  reward6.fillStyle(0x32CD32); // Light green (near mountains)
  reward6.fillTriangle(4, 28, 22, 14, 38, 28);
  reward6.fillTriangle(26, 28, 46, 14, 62, 28);
  // Mountain details (trees)
  reward6.fillStyle(0x1a4a1a);
  reward6.fillRect(8, 24, 2, 4);
  reward6.fillRect(18, 20, 2, 4);
  reward6.fillRect(28, 24, 2, 4);
  reward6.fillRect(36, 20, 2, 4);
  reward6.fillRect(46, 24, 2, 4);
  reward6.fillRect(56, 20, 2, 4);
  // Water with waves
  reward6.fillStyle(0x4169E1); // Deep blue
  reward6.fillRect(0, 28, 64, 24);
  reward6.fillStyle(0x5B9BD5); // Lighter blue waves
  for (let i = 0; i < 8; i++) {
    reward6.fillRect(i * 8, 32, 4, 2);
    reward6.fillRect(i * 8 + 4, 36, 4, 2);
    reward6.fillRect(i * 8, 40, 4, 2);
    reward6.fillRect(i * 8 + 4, 44, 4, 2);
  }
  // Sun with rays
  reward6.fillStyle(0xFFD700); // Gold sun
  reward6.fillCircle(50, 12, 6);
  reward6.fillStyle(0xFFA500); // Orange center
  reward6.fillCircle(50, 12, 4);
  // Sun rays
  reward6.fillStyle(0xFFD700);
  reward6.fillRect(50, 4, 2, 4);
  reward6.fillRect(50, 18, 2, 4);
  reward6.fillRect(44, 12, 4, 2);
  reward6.fillRect(56, 12, 4, 2);
  reward6.fillRect(46, 6, 2, 2);
  reward6.fillRect(54, 6, 2, 2);
  reward6.fillRect(46, 18, 2, 2);
  reward6.fillRect(54, 18, 2, 2);
  // Moon with craters
  reward6.fillStyle(0xFFFFFF); // White moon
  reward6.fillCircle(12, 10, 4);
  reward6.fillStyle(0xE0E0E0); // Light gray craters
  reward6.fillCircle(11, 9, 1);
  reward6.fillCircle(13, 11, 1);
  reward6.fillCircle(12, 10, 0.5);
  // Reflection in water
  reward6.fillStyle(0xFFD700);
  reward6.fillEllipse(50, 42, 12, 4);
  reward6.fillStyle(0xFFFFFF);
  reward6.fillEllipse(12, 40, 8, 3);
  reward6.generateTexture('reward_level_6', 64, 52);
  reward6.destroy();
  
  // Level 7: Taipei 101 (intricate)
  const reward7 = scene.add.graphics();
  // Sky gradient
  reward7.fillStyle(0x87CEEB); // Light blue
  reward7.fillRect(0, 0, 64, 52);
  reward7.fillStyle(0x4682B4); // Medium blue
  reward7.fillRect(0, 0, 64, 30);
  // Clouds
  reward7.fillStyle(0xFFFFFF);
  reward7.fillCircle(8, 6, 3);
  reward7.fillCircle(11, 6, 3);
  reward7.fillCircle(48, 8, 2.5);
  reward7.fillCircle(50, 8, 2.5);
  // Building base
  reward7.fillStyle(0x1C1C1C); // Very dark gray
  reward7.fillRect(22, 50, 20, 2);
  // Main building structure
  reward7.fillStyle(0x2F4F4F); // Dark gray building
  reward7.fillRect(24, 8, 16, 42);
  // Building sides (3D effect)
  reward7.fillStyle(0x1C1C1C); // Darker side
  reward7.fillRect(24, 8, 2, 42);
  reward7.fillStyle(0x3F5F5F); // Lighter side
  reward7.fillRect(38, 8, 2, 42);
  // Windows with detail
  reward7.fillStyle(0x708090); // Gray windows
  for (let i = 0; i < 10; i++) {
    reward7.fillRect(26, 10 + i * 4, 12, 2);
  }
  // Window reflections
  reward7.fillStyle(0x87CEEB);
  for (let i = 0; i < 5; i++) {
    reward7.fillRect(28, 11 + i * 8, 2, 1);
    reward7.fillRect(34, 11 + i * 8, 2, 1);
  }
  // Building segments (Taipei 101 has 8 segments)
  reward7.fillStyle(0x1C1C1C);
  for (let i = 1; i < 8; i++) {
    reward7.fillRect(24, 8 + i * 6, 16, 1);
  }
  // Top section with details
  reward7.fillStyle(0xFFD700); // Gold top
  reward7.fillRect(22, 4, 20, 6);
  reward7.fillStyle(0xFFA500); // Orange accent
  reward7.fillRect(24, 6, 16, 2);
  // Top decorative elements
  reward7.fillStyle(0xFFD700);
  reward7.fillRect(26, 2, 4, 2);
  reward7.fillRect(34, 2, 4, 2);
  reward7.fillStyle(0xFF0000); // Red accents
  reward7.fillRect(28, 2, 8, 2);
  reward7.fillRect(30, 0, 4, 2);
  // Antenna/spire
  reward7.fillStyle(0x1C1C1C);
  reward7.fillRect(30, 0, 4, 4);
  reward7.fillStyle(0xFFD700);
  reward7.fillRect(31, 0, 2, 2);
  reward7.generateTexture('reward_level_7', 64, 52);
  reward7.destroy();
  
  // Level 8: Oyster Omelette Stand (intricate)
  const reward8 = scene.add.graphics();
  // Background
  reward8.fillStyle(0x2F4F4F);
  reward8.fillRect(0, 0, 64, 52);
  // Stand structure
  reward8.fillStyle(0x8B4513); // Brown stand
  reward8.fillRect(8, 28, 48, 24);
  reward8.fillStyle(0x654321); // Darker brown frame
  reward8.fillRect(8, 28, 48, 2);
  reward8.fillRect(8, 50, 48, 2);
  reward8.fillRect(8, 28, 2, 24);
  reward8.fillRect(54, 28, 2, 24);
  // Cooking surface
  reward8.fillStyle(0x708090);
  reward8.fillRect(10, 24, 44, 4);
  reward8.fillStyle(0x5F6F7F);
  reward8.fillRect(10, 24, 44, 1);
  // Omelette with detail
  reward8.fillStyle(0xFFE135); // Yellow omelette base
  reward8.fillEllipse(32, 20, 32, 16);
  reward8.fillStyle(0xFFD700); // Lighter yellow center
  reward8.fillEllipse(32, 20, 24, 12);
  // Omelette texture (egg pattern)
  reward8.fillStyle(0xFFF8DC);
  for (let i = 0; i < 6; i++) {
    reward8.fillRect(18 + i * 4, 18, 2, 1);
    reward8.fillRect(18 + i * 4, 22, 2, 1);
  }
  // Oysters with detail
  reward8.fillStyle(0x808080); // Gray oysters
  reward8.fillCircle(20, 18, 3);
  reward8.fillCircle(28, 19, 3);
  reward8.fillCircle(36, 20, 3);
  reward8.fillCircle(44, 18, 3);
  // Oyster highlights
  reward8.fillStyle(0xA0A0A0);
  reward8.fillCircle(20, 17, 1.5);
  reward8.fillCircle(28, 18, 1.5);
  reward8.fillCircle(36, 19, 1.5);
  reward8.fillCircle(44, 17, 1.5);
  // Oyster texture
  reward8.fillStyle(0x606060);
  reward8.fillCircle(20, 18, 1);
  reward8.fillCircle(28, 19, 1);
  reward8.fillCircle(36, 20, 1);
  reward8.fillCircle(44, 18, 1);
  // Red sauce with detail
  reward8.fillStyle(0xFF0000); // Red sauce
  reward8.fillRect(16, 24, 32, 4);
  reward8.fillStyle(0x8B0000); // Darker red
  reward8.fillRect(18, 25, 28, 2);
  // Sauce texture
  reward8.fillStyle(0xFF4500);
  reward8.fillRect(20, 24, 2, 1);
  reward8.fillRect(26, 24, 2, 1);
  reward8.fillRect(32, 24, 2, 1);
  reward8.fillRect(38, 24, 2, 1);
  reward8.fillRect(44, 24, 2, 1);
  // Green vegetables
  reward8.fillStyle(0x228B22);
  reward8.fillRect(22, 22, 3, 2);
  reward8.fillRect(30, 22, 3, 2);
  reward8.fillRect(38, 22, 3, 2);
  // Gold sign with details
  reward8.fillStyle(0xFFD700);
  reward8.fillRect(12, 4, 40, 10);
  reward8.fillStyle(0xFFA500); // Border
  reward8.fillRect(12, 4, 40, 2);
  reward8.fillRect(12, 12, 40, 2);
  reward8.fillRect(12, 4, 2, 10);
  reward8.fillRect(50, 4, 2, 10);
  // Sign text pattern
  reward8.fillStyle(0xFF0000);
  reward8.fillRect(16, 6, 4, 2);
  reward8.fillRect(22, 6, 4, 2);
  reward8.fillRect(28, 6, 4, 2);
  reward8.fillRect(34, 6, 4, 2);
  reward8.fillRect(40, 6, 4, 2);
  reward8.fillRect(46, 6, 4, 2);
  reward8.fillRect(18, 9, 2, 2);
  reward8.fillRect(24, 9, 2, 2);
  reward8.fillRect(30, 9, 2, 2);
  reward8.fillRect(36, 9, 2, 2);
  reward8.fillRect(42, 9, 2, 2);
  reward8.fillRect(48, 9, 2, 2);
  reward8.generateTexture('reward_level_8', 64, 52);
  reward8.destroy();
  
  // Level 9: Traditional Lantern Festival (intricate)
  const reward9 = scene.add.graphics();
  // Night sky with stars
  reward9.fillStyle(0x000000); // Black sky
  reward9.fillRect(0, 0, 64, 52);
  // Stars
  reward9.fillStyle(0xFFFFFF);
  reward9.fillRect(4, 6, 1, 1);
  reward9.fillRect(12, 4, 1, 1);
  reward9.fillRect(20, 8, 1, 1);
  reward9.fillRect(28, 6, 1, 1);
  reward9.fillRect(36, 4, 1, 1);
  reward9.fillRect(44, 8, 1, 1);
  reward9.fillRect(52, 6, 1, 1);
  reward9.fillRect(60, 4, 1, 1);
  reward9.fillRect(8, 20, 1, 1);
  reward9.fillRect(24, 22, 1, 1);
  reward9.fillRect(40, 20, 1, 1);
  reward9.fillRect(56, 22, 1, 1);
  // Moon
  reward9.fillStyle(0xFFFFE0);
  reward9.fillCircle(8, 10, 3);
  reward9.fillStyle(0xE0E0E0);
  reward9.fillCircle(7, 9, 1);
  reward9.fillCircle(9, 11, 1);
  // Red lanterns with intricate details
  reward9.fillStyle(0xFF0000); // Red lanterns
  reward9.fillCircle(16, 18, 8);
  reward9.fillCircle(32, 14, 8);
  reward9.fillCircle(48, 18, 8);
  // Lantern gold trim
  reward9.fillStyle(0xFFD700);
  reward9.lineStyle(2, 0xFFD700);
  reward9.strokeCircle(16, 18, 8);
  reward9.strokeCircle(32, 14, 8);
  reward9.strokeCircle(48, 18, 8);
  // Lantern vertical lines
  reward9.lineStyle(1, 0xFFD700);
  reward9.beginPath();
  reward9.moveTo(16, 10);
  reward9.lineTo(16, 26);
  reward9.strokePath();
  reward9.beginPath();
  reward9.moveTo(32, 6);
  reward9.lineTo(32, 22);
  reward9.strokePath();
  reward9.beginPath();
  reward9.moveTo(48, 10);
  reward9.lineTo(48, 26);
  reward9.strokePath();
  // Lantern horizontal lines
  reward9.beginPath();
  reward9.moveTo(10, 18);
  reward9.lineTo(22, 18);
  reward9.strokePath();
  reward9.beginPath();
  reward9.moveTo(26, 14);
  reward9.lineTo(38, 14);
  reward9.strokePath();
  reward9.beginPath();
  reward9.moveTo(42, 18);
  reward9.lineTo(54, 18);
  reward9.strokePath();
  // Yellow light glow
  reward9.fillStyle(0xFFFF00);
  reward9.fillCircle(16, 18, 5);
  reward9.fillCircle(32, 14, 5);
  reward9.fillCircle(48, 18, 5);
  // Inner light
  reward9.fillStyle(0xFFFFFF);
  reward9.fillCircle(16, 18, 3);
  reward9.fillCircle(32, 14, 3);
  reward9.fillCircle(48, 18, 3);
  // Lantern tops
  reward9.fillStyle(0xFFD700);
  reward9.fillRect(12, 10, 8, 2);
  reward9.fillRect(28, 6, 8, 2);
  reward9.fillRect(44, 10, 8, 2);
  // Lantern tassels
  reward9.fillStyle(0xFFD700);
  reward9.fillRect(15, 26, 2, 10);
  reward9.fillRect(31, 22, 2, 10);
  reward9.fillRect(47, 26, 2, 10);
  // Tassel details
  reward9.fillStyle(0xFFA500);
  reward9.fillRect(14, 30, 4, 2);
  reward9.fillRect(30, 26, 4, 2);
  reward9.fillRect(46, 30, 4, 2);
  reward9.fillRect(14, 34, 4, 2);
  reward9.fillRect(30, 30, 4, 2);
  reward9.fillRect(46, 34, 4, 2);
  // Light rays from lanterns
  reward9.fillStyle(0xFFFF00);
  reward9.fillRect(14, 8, 4, 1);
  reward9.fillRect(30, 4, 4, 1);
  reward9.fillRect(46, 8, 4, 1);
  reward9.fillRect(14, 28, 4, 1);
  reward9.fillRect(30, 24, 4, 1);
  reward9.fillRect(46, 28, 4, 1);
  reward9.generateTexture('reward_level_9', 64, 52);
  reward9.destroy();
}

// Game configuration and constants

// BPMF Keyboard - Standard Taiwanese layout
const BPMF_KEYBOARD = [
  ['ㄅ', 'ㄉ', 'ㄍ', 'ㄐ', 'ㄓ', 'ㄗ', 'ㄧ', 'ㄚ', 'ㄞ', 'ㄢ'],
  ['ㄆ', 'ㄊ', 'ㄎ', 'ㄑ', 'ㄔ', 'ㄘ', 'ㄨ', 'ㄛ', 'ㄟ', 'ㄣ'],
  ['ㄇ', 'ㄋ', 'ㄏ', 'ㄒ', 'ㄕ', 'ㄙ', 'ㄝ', 'ㄜ', 'ㄠ', 'ㄤ'],
  ['ㄈ', 'ㄌ', '', '', 'ㄖ', '', 'ㄩ', 'ㄡ', 'ㄥ', 'ㄦ']
];

// Game constants
const PLAYER_MAX_HITS = 4;
const PLAYER_SPEED = 200;
const ENEMY_MOVE_SPEED_MIN = 80;
const ENEMY_MOVE_SPEED_MAX = 120;
const ENEMY_MOVE_TIMER_MIN = 1000;
const ENEMY_MOVE_TIMER_MAX = 3000;

// Grid constants
const TILE_SIZE = 32;
const GRID_SPACING = 4; // Every 4 tiles, create a wall line

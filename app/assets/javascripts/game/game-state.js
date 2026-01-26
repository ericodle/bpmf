// Game state management
const GameState = {
  config: null,
  player: null,
  cursors: null,
  enemies: [],
  walls: null,
  door: null,
  doorCollider: null,
  doorUnlocked: false,
  scene: null,
  combatActive: false,
  currentEnemy: null,
  pinyinInput: '',
  selectedBpmf: '',
  combatUI: null,
  lifeIcons: [],
  playerHits: 4,
  playerMaxHits: 4,
  playerLevel: null,
  currentGameLevel: null,
  levelName: '',
  levelCompletions: {},
  bpmfLessons: [],
  expectedBpmf: [],
  
  init(serverData) {
    this.playerLevel = serverData.currentLevel;
    this.currentGameLevel = serverData.currentLevel;
    this.levelName = serverData.levelName || `Level ${serverData.currentLevel}`;
    this.levelCompletions = serverData.levelCompletions || {};
    this.expectedBpmf = serverData.expectedBpmf || [];
    this.bpmfLessons = serverData.bpmfLessons || [];
    this.playerHits = this.playerMaxHits;
    
    // Additional client-side filtering to ensure only correct BPMF symbols
    if (this.expectedBpmf.length > 0) {
      const expectedSet = new Set(this.expectedBpmf.map(b => b.trim()));
      const beforeCount = this.bpmfLessons.length;
      this.bpmfLessons = this.bpmfLessons.filter(lesson => {
        const bpmf = lesson.bpmf?.trim();
        const isValid = bpmf && expectedSet.has(bpmf);
        if (!isValid && bpmf) {
          console.warn(`[GameState] Filtered out invalid lesson: ${bpmf} (expected: ${Array.from(expectedSet).join(', ')})`);
        }
        return isValid;
      });
      if (beforeCount !== this.bpmfLessons.length) {
        console.warn(`[GameState] Filtered ${beforeCount - this.bpmfLessons.length} invalid lessons`);
      }
    }
    
    // Fallback if no lessons loaded
    if (!this.bpmfLessons || this.bpmfLessons.length === 0) {
      console.warn('No BPMF lessons loaded, using fallback');
      this.bpmfLessons = [
        { order: 2, bpmf: 'ㄅ', pinyin: 'b' },
        { order: 3, bpmf: 'ㄆ', pinyin: 'p' },
        { order: 4, bpmf: 'ㄇ', pinyin: 'm' },
        { order: 5, bpmf: 'ㄈ', pinyin: 'f' }
      ];
    }
    
    console.log(`Level ${this.currentGameLevel} (${this.levelName}): ${this.bpmfLessons.length} BPMF lessons loaded`);
    console.log('BPMF symbols:', this.bpmfLessons.map(l => `${l.bpmf}(${l.pinyin})`).join(', '));
  },
  
  reset() {
    this.combatActive = false;
    this.currentEnemy = null;
    this.pinyinInput = '';
    this.selectedBpmf = '';
    this.combatUI = null;
    this.playerHits = this.playerMaxHits;
  }
};

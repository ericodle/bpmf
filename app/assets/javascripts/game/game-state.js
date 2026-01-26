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
  level1Completed: false,
  level2Completed: false,
  bpmfLessons: [],
  
  init(serverData) {
    this.playerLevel = serverData.currentLevel;
    this.currentGameLevel = serverData.currentLevel;
    this.level1Completed = serverData.level1Completed === true || serverData.level1Completed === 'true';
    this.level2Completed = serverData.level2Completed === true || serverData.level2Completed === 'true';
    this.bpmfLessons = serverData.bpmfLessons || [];
    this.playerHits = this.playerMaxHits;
    
    // Fallback if no lessons loaded
    if (!this.bpmfLessons || this.bpmfLessons.length === 0) {
      console.warn('No BPMF lessons loaded, using fallback');
      this.bpmfLessons = [
        { order: 2, bpmf: 'ㄅ', pinyin: 'b' },
        { order: 3, bpmf: 'ㄆ', pinyin: 'p' },
        { order: 4, bpmf: 'ㄇ', pinyin: 'm' }
      ];
    }
    
    console.log('BPMF lessons loaded:', this.bpmfLessons.length);
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

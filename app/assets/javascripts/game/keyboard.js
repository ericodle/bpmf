// BPMF keyboard HTML creation and rendering
function createBpmfKeyboardHTML() {
  // Remove existing keyboard if any
  const existing = document.getElementById('combat-bpmf-keyboard');
  if (existing) existing.remove();
  
  const gameContainer = document.getElementById('game-container');
  if (!gameContainer) return;
  
  const keyboardDiv = document.createElement('div');
  keyboardDiv.id = 'combat-bpmf-keyboard';
  const containerHeight = gameContainer.clientHeight;
  keyboardDiv.style.cssText = `
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin-top: ${containerHeight * 0.20}px;
    width: 75%;
    max-width: 900px;
    min-height: ${containerHeight * 0.25}px;
    max-height: ${containerHeight * 0.25}px;
    display: flex;
    justify-content: center;
    gap: 4px;
    flex-wrap: wrap;
    pointer-events: auto;
    z-index: 1001;
    background: rgba(17, 17, 17, 0.9);
    padding: 8px;
    border-radius: 10px;
    border: 2px solid #00ff88;
    overflow-y: auto;
  `;
  
  const numColumns = BPMF_KEYBOARD[0].length;
  for (let col = 0; col < numColumns; col++) {
    const colDiv = document.createElement('div');
    colDiv.style.cssText = 'display: flex; flex-direction: column; gap: 4px;';
    
    BPMF_KEYBOARD.forEach((row) => {
      const symbol = row[col];
      if (symbol && symbol.trim() !== '') {
        const btn = document.createElement('button');
        btn.textContent = symbol;
        const isSelected = GameState.selectedBpmf === symbol;
        const isYi = symbol === 'ㄧ';
        const baseTransform = isYi ? 'rotate(90deg)' : 'none';
        btn.style.cssText = `
          font-size: 20px;
          padding: 6px 10px;
          min-width: 38px;
          height: 38px;
          background: ${isSelected ? 'rgba(0, 255, 136, 0.6)' : 'rgba(0, 255, 136, 0.2)'};
          border: 2px solid #00ff88;
          border-radius: 5px;
          color: #00ff88;
          cursor: pointer;
          transition: all 0.3s;
          text-shadow: 0 0 8px rgba(0, 255, 136, 0.8);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transform: ${baseTransform};
        `;
        btn.onmouseover = function() {
          if (!isSelected) {
            this.style.background = 'rgba(0, 255, 136, 0.4)';
            this.style.boxShadow = '0 0 20px rgba(0, 255, 136, 0.6)';
          }
        };
        btn.onmouseout = function() {
          if (!isSelected) {
            this.style.background = 'rgba(0, 255, 136, 0.2)';
            this.style.boxShadow = 'none';
          }
        };
        btn.onclick = function() {
          GameState.selectedBpmf = symbol;
          updateCombatUI();
          renderBpmfKeyboardHTML();
        };
        colDiv.appendChild(btn);
      }
    });
    
    keyboardDiv.appendChild(colDiv);
  }
  
  gameContainer.appendChild(keyboardDiv);
}

function renderBpmfKeyboardHTML() {
  // Don't render keyboard if player is dead or combat is not active
  if (GameState.playerHits <= 0 || !GameState.combatActive) {
    const keyboardDiv = document.getElementById('combat-bpmf-keyboard');
    if (keyboardDiv) {
      keyboardDiv.remove();
    }
    return;
  }
  
  const keyboardDiv = document.getElementById('combat-bpmf-keyboard');
  if (!keyboardDiv) return;
  
  const buttons = keyboardDiv.querySelectorAll('button');
  buttons.forEach(btn => {
    const symbol = btn.textContent;
    const isSelected = GameState.selectedBpmf === symbol;
    const isYi = symbol === 'ㄧ';
    const baseTransform = isYi ? 'rotate(90deg)' : 'none';
    btn.style.background = isSelected ? 'rgba(0, 255, 136, 0.6)' : 'rgba(0, 255, 136, 0.2)';
    btn.style.transform = baseTransform;
  });
}

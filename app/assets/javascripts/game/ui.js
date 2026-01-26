// UI management (life icons, death screen, level status)
function createUI(scene) {
  // Life icons (BPMF letters) - positioned outside game zone
  const gameContainer = document.getElementById('game-container');
  if (gameContainer) {
    // Remove any existing life container
    const existingLifeContainer = document.getElementById('life-icons-container');
    if (existingLifeContainer) existingLifeContainer.remove();
    
    const lifeContainer = document.createElement('div');
    lifeContainer.id = 'life-icons-container';
    lifeContainer.style.cssText = `
      position: absolute;
      left: -50px;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      flex-direction: column;
      gap: 10px;
      z-index: 100;
    `;
    
    GameState.lifeIcons = [];
    const bpmfLetters = ['B', 'P', 'M', 'F'];
    for (let i = 0; i < GameState.playerMaxHits; i++) {
      const iconDiv = document.createElement('div');
      iconDiv.textContent = bpmfLetters[i];
      iconDiv.style.cssText = `
        width: 32px;
        height: 32px;
        border-radius: 6px;
        background: #0a1f0a;
        border: 2px solid #00ff88;
        color: #00ff88;
        font-size: 20px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        box-shadow: 0 0 10px rgba(0, 255, 136, 0.8);
        text-shadow: 0 0 8px rgba(0, 255, 136, 0.8);
      `;
      lifeContainer.appendChild(iconDiv);
      GameState.lifeIcons.push(iconDiv);
    }
    
    // Insert life container in the same parent container as game container
    const parentContainer = gameContainer.parentElement;
    if (parentContainer) {
      parentContainer.style.position = 'relative';
      parentContainer.appendChild(lifeContainer);
    } else {
      gameContainer.parentNode.insertBefore(lifeContainer, gameContainer.nextSibling);
    }
  }
  
  // Show level progression status (removed - door handles progression now)
}

function showDeathScreen() {
  const scene = GameState.player.scene;
  const gameWidth = scene.scale.width;
  const gameHeight = scene.scale.height;
  
  // Stop combat immediately
  GameState.combatActive = false;
  
  // Remove combat UI and keyboard immediately
  if (GameState.combatUI) {
    GameState.combatUI.bg.destroy();
    GameState.combatUI.bpmfText.destroy();
    GameState.combatUI.step1Label.destroy();
    GameState.combatUI.pinyinDisplay.destroy();
    GameState.combatUI.step2Label.destroy();
    GameState.combatUI.bpmfDisplay.destroy();
    GameState.combatUI.keyboardContainer.destroy();
    GameState.combatUI.feedback.destroy();
    GameState.combatUI = null;
  }
  
  // Remove HTML keyboard - force removal from DOM completely
  const gameContainer = document.getElementById('game-container');
  if (gameContainer) {
    const keyboardDiv = document.getElementById('combat-bpmf-keyboard');
    if (keyboardDiv) {
      keyboardDiv.parentNode?.removeChild(keyboardDiv);
    }
    
    const allKeyboards = gameContainer.querySelectorAll('#combat-bpmf-keyboard, [id*="bpmf"], [id*="keyboard"]');
    allKeyboards.forEach(kb => {
      kb.parentNode?.removeChild(kb);
    });
    
    const allDivs = gameContainer.querySelectorAll('div');
    allDivs.forEach(div => {
      if (div.id && (div.id.includes('bpmf') || div.id.includes('keyboard'))) {
        div.parentNode?.removeChild(div);
      }
    });
  }
  
  const bodyKeyboard = document.body.querySelector('#combat-bpmf-keyboard');
  if (bodyKeyboard) {
    bodyKeyboard.parentNode?.removeChild(bodyKeyboard);
  }
  
  // Hide player and enemies during death screen
  if (GameState.player) {
    GameState.player.setVisible(false);
    GameState.player.setActive(false);
  }
  
  GameState.enemies.forEach(enemy => {
    if (enemy && enemy.active) {
      enemy.setVisible(false);
    }
  });
  
  if (GameState.combatActive) {
    endCombat(false);
  }
  
  // Death screen background
  const deathBg = scene.add.rectangle(gameWidth / 2, gameHeight / 2, gameWidth * 2, gameHeight * 2, 0x000000, 1.0);
  deathBg.setDepth(10000);
  
  // Death message
  const deathText = scene.add.text(gameWidth / 2, gameHeight / 2 - 50, "You've been BPMF'd!", {
    fontSize: '48px',
    fill: '#ff4444',
    fontStyle: 'bold'
  }).setOrigin(0.5).setDepth(10001);
  
  // Reset after 2 seconds - reload page to restart at level 1
  setTimeout(() => {
    window.location.reload();
  }, 2000);
}

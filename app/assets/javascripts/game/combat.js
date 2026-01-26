// Combat system logic
function startCombat(player, enemy) {
  if (GameState.combatActive) return;
  
  GameState.combatActive = true;
  GameState.currentEnemy = enemy;
  GameState.pinyinInput = '';
  GameState.selectedBpmf = '';
  
  // Stop player movement
  player.setVelocity(0);
  
  // Show combat UI
  showCombatUI();
  
  // Focus on the game container to receive keyboard input
  setTimeout(() => {
    const gameContainer = document.getElementById('game-container');
    if (gameContainer) {
      gameContainer.focus();
      gameContainer.setAttribute('tabindex', '0');
    }
  }, 100);
}

function showCombatUI() {
  const scene = GameState.player.scene;
  const gameWidth = scene.scale.width;
  const gameHeight = scene.scale.height;
  
  // Combat background - fit within screen
  const combatBg = scene.add.rectangle(gameWidth / 2, gameHeight / 2, gameWidth * 0.9, gameHeight * 0.95, 0x000000, 0.95);
  combatBg.setStrokeStyle(3, 0x00ff88);
  
  // Enemy BPMF symbol (what they need to type) - top, reduced margin
  const enemyBpmf = GameState.currentEnemy.getData('bpmf');
  const bpmfText = scene.add.text(gameWidth / 2, gameHeight * 0.15, enemyBpmf.bpmf || '?', {
    fontSize: '100px',
    fill: '#ff4444',
    fontStyle: 'bold'
  }).setOrigin(0.5);
  
  // Step 1: Pinyin input - reduced spacing
  const step1Label = scene.add.text(gameWidth / 2, gameHeight * 0.30, 'Step 1: Type the pinyin:', {
    fontSize: '18px',
    fill: '#00ff88'
  }).setOrigin(0.5);
  
  const pinyinDisplay = scene.add.text(gameWidth / 2, gameHeight * 0.35, '', {
    fontSize: '28px',
    fill: '#4ade80',
    fontStyle: 'bold'
  }).setOrigin(0.5);
  
  // Step 2: BPMF selection - reduced spacing
  const step2Label = scene.add.text(gameWidth / 2, gameHeight * 0.42, 'Step 2: Select the BPMF character:', {
    fontSize: '18px',
    fill: '#00ff88'
  }).setOrigin(0.5);
  
  const bpmfDisplay = scene.add.text(gameWidth / 2, gameHeight * 0.47, '', {
    fontSize: '40px',
    fill: '#4ade80',
    fontStyle: 'bold'
  }).setOrigin(0.5);
  
  // BPMF Keyboard container (we'll render it in HTML overlay) - positioned lower
  const keyboardContainer = scene.add.rectangle(gameWidth / 2, gameHeight * 0.70, gameWidth * 0.75, gameHeight * 0.25, 0x111111, 0.8);
  keyboardContainer.setStrokeStyle(2, 0x00ff88);
  
  // Feedback - at bottom
  const feedback = scene.add.text(gameWidth / 2, gameHeight * 0.92, '', {
    fontSize: '16px',
    fill: '#00ff88',
    wordWrap: { width: gameWidth * 0.8 }
  }).setOrigin(0.5);
  
  GameState.combatUI = {
    bg: combatBg,
    bpmfText: bpmfText,
    step1Label: step1Label,
    pinyinDisplay: pinyinDisplay,
    step2Label: step2Label,
    bpmfDisplay: bpmfDisplay,
    keyboardContainer: keyboardContainer,
    feedback: feedback
  };
  
  // Create HTML overlay for BPMF keyboard
  createBpmfKeyboardHTML();
  updateCombatUI();
}

function updateCombatUI() {
  if (!GameState.combatUI || GameState.playerHits <= 0 || !GameState.combatActive) {
    // Remove keyboard if player is dead or combat not active
    const keyboardDiv = document.getElementById('combat-bpmf-keyboard');
    if (keyboardDiv) {
      keyboardDiv.remove();
    }
    return;
  }
  GameState.combatUI.pinyinDisplay.setText(GameState.pinyinInput || '_');
  
  if (GameState.selectedBpmf) {
    const isYi = GameState.selectedBpmf === 'ㄧ';
    GameState.combatUI.bpmfDisplay.setText(GameState.selectedBpmf);
    GameState.combatUI.bpmfDisplay.setRotation(isYi ? Math.PI / 2 : 0);
  } else {
    GameState.combatUI.bpmfDisplay.setText('_');
    GameState.combatUI.bpmfDisplay.setRotation(0);
  }
  
  renderBpmfKeyboardHTML();
  
  // Check if both are ready
  const enemyBpmf = GameState.currentEnemy.getData('bpmf');
  const correctPinyin = enemyBpmf.pinyin?.toLowerCase().trim();
  const correctBpmf = enemyBpmf.bpmf;
  
  const pinyinReady = GameState.pinyinInput.toLowerCase().trim() === correctPinyin;
  const bpmfReady = GameState.selectedBpmf === correctBpmf;
  
  if (pinyinReady && bpmfReady) {
    GameState.combatUI.feedback.setText('Ready! Press Enter to attack!');
    GameState.combatUI.feedback.setColor('#00ff88');
  } else if (pinyinReady) {
    GameState.combatUI.feedback.setText('Pinyin correct! Now select the BPMF character.');
    GameState.combatUI.feedback.setColor('#4ade80');
  } else {
    GameState.combatUI.feedback.setText('Type the pinyin for the symbol above.');
    GameState.combatUI.feedback.setColor('#00ff88');
  }
}

function submitCombatAnswer() {
  if (!GameState.currentEnemy || !GameState.combatUI) return;
  
  const enemyBpmf = GameState.currentEnemy.getData('bpmf');
  const correctPinyin = enemyBpmf.pinyin?.toLowerCase().trim();
  const correctBpmf = enemyBpmf.bpmf;
  const userPinyin = GameState.pinyinInput.toLowerCase().trim();
  const userBpmf = GameState.selectedBpmf;
  
  const pinyinCorrect = userPinyin === correctPinyin;
  const bpmfCorrect = userBpmf === correctBpmf;
  
  if (pinyinCorrect && bpmfCorrect) {
    // Both correct! Enemy defeated immediately
    GameState.combatUI.feedback.setText('Perfect! Enemy defeated!');
    GameState.combatUI.feedback.setColor('#00ff88');
    
    // Enemy defeated - save lesson progress
    const lessonOrder = enemyBpmf.order;
    if (lessonOrder) {
      fetch(`/lessons/${lessonOrder}/complete`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content
        }
      }).then(response => response.json())
        .then(data => {
          console.log('Lesson progress saved:', data);
        })
        .catch(error => console.error('Error saving progress:', error));
    }
    
    setTimeout(() => {
      endCombat(true);
    }, 1000);
  } else {
    // Wrong answer
    let errorMsg = '';
    if (!pinyinCorrect && !bpmfCorrect) {
      errorMsg = `Both wrong! Pinyin: ${correctPinyin}, BPMF: ${correctBpmf}`;
    } else if (!pinyinCorrect) {
      errorMsg = `Pinyin wrong! Correct: ${correctPinyin}`;
    } else {
      errorMsg = `BPMF wrong! Correct: ${correctBpmf}`;
    }
    
    GameState.combatUI.feedback.setText(errorMsg);
    GameState.combatUI.feedback.setColor('#ff4444');
    
    // Player takes a hit
    GameState.playerHits = Math.max(0, GameState.playerHits - 1);
    
    // Play damage sound
    if (typeof playDamageSound === 'function') {
      playDamageSound();
    }
    
    // Remove one life icon
    if (GameState.lifeIcons.length > GameState.playerHits && GameState.lifeIcons[GameState.playerHits]) {
      GameState.lifeIcons[GameState.playerHits].style.display = 'none';
      GameState.lifeIcons[GameState.playerHits].remove();
      GameState.lifeIcons.splice(GameState.playerHits, 1);
    }
    
    if (GameState.playerHits <= 0) {
      // Player died - play death sound and show death screen
      if (typeof playDeathSound === 'function') {
        playDeathSound();
      }
      showDeathScreen();
    } else {
      // Reset inputs
      GameState.pinyinInput = '';
      GameState.selectedBpmf = '';
      setTimeout(() => {
        updateCombatUI();
      }, 2000);
    }
  }
}

function endCombat(victory) {
  const scene = GameState.player.scene;
  const gameWidth = scene.scale.width;
  const gameHeight = scene.scale.height;
  
  // Remove combat UI
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
  
  // Remove HTML keyboard
  const keyboardDiv = document.getElementById('combat-bpmf-keyboard');
  if (keyboardDiv) keyboardDiv.remove();
  
  if (victory) {
    // Remove enemy
    GameState.currentEnemy.destroy();
    GameState.enemies = GameState.enemies.filter(e => e !== GameState.currentEnemy);
    
    // Check if all enemies are defeated
    if (GameState.enemies.length === 0) {
      // All enemies defeated - unlock the door
      unlockDoor();
    }
  }
  
  GameState.currentEnemy = null;
  GameState.combatActive = false;
  GameState.pinyinInput = '';
  GameState.selectedBpmf = '';
}

function handleKeyDown(event) {
  if (!GameState.combatActive) return;

  // Handle pinyin input during combat
  if (event.key === 'Enter') {
    submitCombatAnswer();
  } else if (event.key === 'Backspace') {
    GameState.pinyinInput = GameState.pinyinInput.slice(0, -1);
    updateCombatUI();
  } else if (event.key.length === 1 && /[a-z]/.test(event.key)) {
    GameState.pinyinInput += event.key;
    updateCombatUI();
  }
}

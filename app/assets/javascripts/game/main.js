// Main entry point - initializes game after Phaser loads
(function() {
  // Initialize game state with server data
  GameState.init({
    currentLevel: window.GAME_DATA.currentLevel,
    level1Completed: window.GAME_DATA.level1Completed,
    level2Completed: window.GAME_DATA.level2Completed,
    bpmfLessons: window.GAME_DATA.bpmfLessons
  });
  
  // Wait for page to be ready, then load Phaser
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      console.log('DOM loaded, starting Phaser load...');
      loadPhaser()
        .then(() => {
          console.log('Phaser loaded, initializing game...');
          const loadingDiv = document.getElementById('game-loading');
          if (loadingDiv) loadingDiv.textContent = 'Initializing game...';
          setTimeout(initGame, 100);
        })
        .catch((error) => {
          console.error('Failed to load Phaser:', error);
          const container = document.getElementById('game-container');
          if (container) {
            container.innerHTML = '<p style="color: #ff4444; padding: 20px; text-align: center;">Error: Failed to load Phaser.js.<br>Please check your internet connection and refresh the page.<br><small>' + error.message + '</small><br><br><button onclick="location.reload()" style="padding: 10px 20px; background: #00ff88; color: #000; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">Retry</button></p>';
          }
        });
    });
  } else {
    console.log('DOM already ready, starting Phaser load...');
    loadPhaser()
      .then(() => {
        console.log('Phaser loaded, initializing game...');
        const loadingDiv = document.getElementById('game-loading');
        if (loadingDiv) loadingDiv.textContent = 'Initializing game...';
        setTimeout(initGame, 100);
      })
      .catch((error) => {
        console.error('Failed to load Phaser:', error);
        const container = document.getElementById('game-container');
        if (container) {
          container.innerHTML = '<p style="color: #ff4444; padding: 20px; text-align: center;">Error: Failed to load Phaser.js.<br>Please check your internet connection and refresh the page.<br><small>' + error.message + '</small><br><br><button onclick="location.reload()" style="padding: 10px 20px; background: #00ff88; color: #000; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">Retry</button></p>';
        }
      });
  }
})();

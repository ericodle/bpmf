// Phaser.js loader with fallback CDNs
function loadPhaser() {
  return new Promise((resolve, reject) => {
    if (typeof Phaser !== 'undefined') {
      console.log('Phaser already loaded');
      resolve();
      return;
    }
    
    const loadingDiv = document.getElementById('game-loading');
    let attemptCount = 0;
    const maxAttempts = 3;
    const cdnUrls = [
      'https://unpkg.com/phaser@3.80.1/dist/phaser.min.js',
      'https://cdn.jsdelivr.net/npm/phaser@3.80.1/dist/phaser.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/phaser/3.80.1/dist/phaser.min.js'
    ];
    
    function tryLoad(index) {
      if (index >= cdnUrls.length) {
        console.error('All CDN attempts failed');
        if (loadingDiv) loadingDiv.textContent = 'Failed to load Phaser.js. Please check your internet connection.';
        reject(new Error('Failed to load Phaser.js from all CDN sources'));
        return;
      }
      
      attemptCount++;
      const url = cdnUrls[index];
      console.log(`Attempt ${attemptCount}: Loading Phaser from ${url}`);
      if (loadingDiv) loadingDiv.textContent = `Loading Phaser.js... (attempt ${attemptCount}/${maxAttempts})`;
      
      const script = document.createElement('script');
      script.src = url;
      script.async = true;
      
      const timeout = setTimeout(() => {
        console.error(`Timeout loading from ${url}`);
        script.remove();
        tryLoad(index + 1);
      }, 10000);
      
      script.onload = () => {
        console.log(`Phaser loaded successfully from ${url}`);
        clearTimeout(timeout);
        resolve();
      };
      
      script.onerror = () => {
        console.error(`Failed to load from ${url}`);
        clearTimeout(timeout);
        script.remove();
        tryLoad(index + 1);
      };
      
      document.head.appendChild(script);
    }
    
    tryLoad(0);
  });
}

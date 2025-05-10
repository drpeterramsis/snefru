    let interval = null;
    let startTime = null;
    let paused = false;
    let elapsedBeforePause = 0;

    function updateDisplay(seconds) {
      const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
      const secs = String(seconds % 60).padStart(2, '0');
      document.getElementById("timerDisplay").innerText = `${mins}:${secs}`;
    }

    function startTimer() {
      if (interval) return; // already running

      startTime = Date.now() - elapsedBeforePause;

      interval = setInterval(() => {
        const now = Date.now();
        const elapsed = Math.floor((now - startTime) / 1000);
        updateDisplay(elapsed);

        if (elapsed % 10 === 0 && elapsed !== 0) { // every 5 min (300 sec)
          document.getElementById('beep').play();
          if ("vibrate" in navigator) navigator.vibrate(500);
        }
      }, 1000);
    }

    function pauseTimer() {
      if (!interval) return;
      clearInterval(interval);
      interval = null;
      paused = true;
      elapsedBeforePause = Date.now() - startTime;
    }

    function stopTimer() {
      clearInterval(interval);
      interval = null;
      paused = false;
      elapsedBeforePause = 0;
      updateDisplay(0);
    }

    function resetTimer() {
      stopTimer();
      startTimer();
    }

    updateDisplay(0); // initialize display
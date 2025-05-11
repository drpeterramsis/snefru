let interval = null;
  let startTime = null;
  let paused = false;
  let elapsedBeforePause = 0;
  const beep = document.getElementById("beep");

  function updateDisplay(seconds) {
    const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    document.getElementById("timerDisplay").innerText = `${mins}:${secs}`;
  }

  function toggleStartPause() {
    if (interval) {
      pauseTimer();
      document.getElementById("startPauseBtn").innerText = "Resume";
    } else {
      startTimer();
      document.getElementById("startPauseBtn").innerText = "Pause";
    }
  }

  function startTimer() {
    startTime = Date.now() - elapsedBeforePause;
    interval = setInterval(() => {
      const now = Date.now();
      const elapsed = Math.floor((now - startTime) / 1000);
      updateDisplay(elapsed);

      if (elapsed % 5 === 0 && elapsed !== 0) { // every 5 mins
        playBeepFor4Seconds();
        if ("vibrate" in navigator) navigator.vibrate(500);
      }
    }, 1000);
  }

  function playBeepFor4Seconds() {
    beep.currentTime = 0;
    beep.play();
    document.getElementById("silenceBtn").style.display = "inline";

    setTimeout(() => {
      beep.pause();
      beep.currentTime = 0;
      document.getElementById("silenceBtn").style.display = "none";
    }, 4000);
  }

  function silenceAlarm() {
    beep.pause();
    beep.currentTime = 0;
    document.getElementById("silenceBtn").style.display = "none";
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

    // Reset button
    document.getElementById("startPauseBtn").innerText = "Start";

    // Stop sound if playing
    silenceAlarm();
  }

  updateDisplay(0); // Initialize display
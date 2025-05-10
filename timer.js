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

    if (elapsed % 10 === 0 && elapsed !== 0) { // every 10 sec
      playBeepFor4Seconds();
      if ("vibrate" in navigator) navigator.vibrate(500);
    }
  }, 1000);
}

function playBeepFor4Seconds() {
  const beep = new Audio('path/to/your/sound.mp3'); // Replace with your sound file URL
  beep.play();
  
  // Stop the sound after 4 seconds
  setTimeout(() => {
    beep.pause();
    beep.currentTime = 0; // Reset to the beginning
  }, 4000); // Stop after 4 seconds
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

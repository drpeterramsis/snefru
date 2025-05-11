

  let interval1 = null;
let startTime1 = null;
let paused1 = false;
let elapsedBeforePause1 = 0;
const beep1 = document.getElementById("beep1");

function updateDisplay1(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  document.getElementById("timerDisplay1").innerText = `${mins}:${secs}`;
}

function toggleStartPause1() {
  if (interval1) {
    pauseTimer1();
    document.getElementById("startPauseBtn1").innerText = "Resume";
  } else {
    startTimer1();
    document.getElementById("startPauseBtn1").innerText = "Pause";
  }
}

function startTimer1() {
  startTime1 = Date.now() - elapsedBeforePause1;
  interval1 = setInterval(() => {
    const now = Date.now();
    const elapsed = Math.floor((now - startTime1) / 1000);
    updateDisplay1(elapsed);

    if (elapsed % 300 === 0 && elapsed !== 0) { // every 5 mins
      playBeepFor4Seconds1();
      if ("vibrate" in navigator) navigator.vibrate(500);
    }
  }, 1000);
}

function playBeepFor4Seconds1() {
  beep1.currentTime = 0;
  beep1.play();
  document.getElementById("silenceBtn1").style.display = "inline";

  setTimeout(() => {
    beep1.pause();
    beep1.currentTime = 0;
    document.getElementById("silenceBtn1").style.display = "none";
  }, 4000);
}

function silenceAlarm1() {
  beep1.pause();
  beep1.currentTime = 0;
  document.getElementById("silenceBtn1").style.display = "none";
}

function pauseTimer1() {
  if (!interval1) return;
  clearInterval(interval1);
  interval1 = null;
  paused1 = true;
  elapsedBeforePause1 = Date.now() - startTime1;
}

function stopTimer1() {
  clearInterval(interval1);
  interval1 = null;
  paused1 = false;
  elapsedBeforePause1 = 0;
  updateDisplay1(0);

  // Reset button
  document.getElementById("startPauseBtn1").innerText = "Start";

  // Stop sound if playing
  silenceAlarm1();
}

updateDisplay1(0); // Initialize display for Timer 1



let interval2 = null;
let startTime2 = null;
let paused2 = false;
let elapsedBeforePause2 = 0;
const beep2 = document.getElementById("beep2");

function updateDisplay2(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  document.getElementById("timerDisplay2").innerText = `${mins}:${secs}`;
}

function toggleStartPause2() {
  if (interval2) {
    pauseTimer2();
    document.getElementById("startPauseBtn2").innerText = "Resume";
  } else {
    startTimer2();
    document.getElementById("startPauseBtn2").innerText = "Pause";
  }
}

function startTimer2() {
  startTime2 = Date.now() - elapsedBeforePause2;
  interval2 = setInterval(() => {
    const now = Date.now();
    const elapsed = Math.floor((now - startTime2) / 1000);
    updateDisplay2(elapsed);

    if (elapsed % 300 === 0 && elapsed !== 0) { // every 5 mins
      playBeepFor4Seconds2();
      if ("vibrate" in navigator) navigator.vibrate(500);
    }
  }, 1000);
}

function playBeepFor4Seconds2() {
  beep2.currentTime = 0;
  beep2.play();
  document.getElementById("silenceBtn2").style.display = "inline";

  setTimeout(() => {
    beep2.pause();
    beep2.currentTime = 0;
    document.getElementById("silenceBtn2").style.display = "none";
  }, 4000);
}

function silenceAlarm2() {
  beep2.pause();
  beep2.currentTime = 0;
  document.getElementById("silenceBtn2").style.display = "none";
}

function pauseTimer2() {
  if (!interval2) return;
  clearInterval(interval2);
  interval2 = null;
  paused2 = true;
  elapsedBeforePause2 = Date.now() - startTime2;
}

function stopTimer2() {
  clearInterval(interval2);
  interval2 = null;
  paused2 = false;
  elapsedBeforePause2 = 0;
  updateDisplay2(0);

  // Reset button
  document.getElementById("startPauseBtn2").innerText = "Start";

  // Stop sound if playing
  silenceAlarm2();
}

updateDisplay2(0); // Initialize display for Timer 2

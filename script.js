let hrs = 0, mins = 0, secs = 0;
let timer = null;

function pad(num) {
  return num.toString().padStart(2, '0');
}

function updateDisplay() {
  document.getElementById("display").innerText =
    `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
}

function startTimer() {
  if (timer !== null) return;

  timer = setInterval(() => {
    secs++;
    if (secs === 60) {
      secs = 0;
      mins++;
    }
    if (mins === 60) {
      mins = 0;
      hrs++;
    }
    updateDisplay();
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  stopTimer();
  hrs = mins = secs = 0;
  updateDisplay();
  document.getElementById("laps").innerHTML = ""; // clear laps when reset
}

function lapTimer() {
  const lapTime = `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
  const li = document.createElement("li");
  li.textContent = `Lap ${document.getElementById("laps").children.length + 1}: ${lapTime}`;
  document.getElementById("laps").appendChild(li);
}

// Attach functions to global scope
window.start = startTimer;
window.stop = stopTimer;
window.reset = resetTimer;
window.lap = lapTimer;

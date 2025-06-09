let startTime;
let elapsedTime = 0;
let timerInterval;

function timeToString(time) {
  const hrs = Math.floor(time / 3600000);
  const mins = Math.floor((time % 3600000) / 60000);
  const secs = Math.floor((time % 60000) / 1000);
  return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
}

function pad(unit) {
  return unit.toString().padStart(2, '0');
}

function start() {
  if (!timerInterval) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      document.getElementById("display").textContent = timeToString(elapsedTime);
    }, 1000);
  }
}

function pause() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function reset() {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  document.getElementById("display").textContent = "00:00:00";
  document.getElementById("lapList").innerHTML = "";
}

function lap() {
  if (elapsedTime > 0) {
    const lapTime = timeToString(elapsedTime);
    const lapList = document.getElementById("lapList");
    const li = document.createElement("li");
    li.textContent = lapTime;
    lapList.appendChild(li);
  }
}

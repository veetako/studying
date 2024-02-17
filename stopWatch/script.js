// Variables

const startPause = document.querySelector("#startPause");
const reset = document.querySelector("#reset");

let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

let timerInterval = null;
let timerStatus = "stopped";

// stopwatch function

function stopWatch() {
  seconds++;

  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  if (seconds < 10) {
    leadingSeconds = "0" + seconds.toString();
  } else {
    leadingSeconds = seconds;
  }
  if (minutes < 10) {
    leadingMinutes = "0" + minutes.toString();
  } else {
    leadingMinutes = minutes;
  }
  if (hours < 10) {
    leadingHours = "0" + hours.toString();
  } else {
    leadingHours = hours;
  }

  let displayTimer = (document.querySelector(
    "#timer"
  ).innerText = `${leadingHours}:${leadingMinutes}:${leadingSeconds}`);
}

startPause.addEventListener("click", function () {
  if (timerStatus === "stopped") {
    timerInterval = window.setInterval(stopWatch, 1000);
    document.querySelector("#startPause").innerText = "PAUSE";
    document.querySelector("#startPause").style.backgroundColor = "orange";
    timerStatus = "started";
  } else {
    window.clearInterval(timerInterval);
    document.querySelector("#startPause").innerText = "START";
    document.querySelector("#startPause").style.backgroundColor = "#19b619";
    timerStatus = "stopped";
  }
});

reset.addEventListener("click", function () {
  window.clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;

  document.querySelector("#timer").innerText = "00:00:00";

  if (timerStatus === "started") {
    document.querySelector("#startPause").innerText = "START";
    document.querySelector("#startPause").style.backgroundColor = "#19b619";
    timerStatus = "stopped";
  }
});

let inputField = document.getElementById('input-field');
let hours = document.getElementById('hours');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');
let totalTime, handle;

function reset() {
  hours.innerText = '0';
  minutes.innerText = '0';
  seconds.innerText = '0';
  inputField.value = '';
  clearInterval(handle);
  document.getElementById('start-btn').disabled = false;
}

function startTimer() {
  totalTime = parseInt(inputField.value);
  handle = setInterval(timer, 1000);
  document.getElementById('start-btn').disabled = true;
}

function timer() {
  formatTime(totalTime);
  if (totalTime <= 0) reset();
  else totalTime--;
}

function formatTime(second) {
  const hh = parseInt(second / 3600);
  second = second % 3600;
  const mm = parseInt(second / 60);
  second %= 60;
  hours.innerText = hh;
  minutes.innerText = mm;
  seconds.innerText = second;
}

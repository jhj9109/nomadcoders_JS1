const clock = document.querySelector("h2#clock");

const numberToTime = (number) => number.toString().padStart(2, "0");

function getClock() {
  const date = new Date();
  const hours = numberToTime(date.getHours());
  const minutes = numberToTime(date.getMinutes());
  const seconds = numberToTime(date.getSeconds());
  // ES2017 문법 padStart() & padEnd()
  clock.textContent = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);
// setTimeout(getClock, 기다리기원하는 시간.)

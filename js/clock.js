const clock = document.querySelector("div.clock");
const hour = clock.querySelector("div.main span:first-child");
const minute = clock.querySelector("div.main span:last-child");

const numberToTime = (number) => number.toString().padStart(2, "0");

function getClock() {
  const date = new Date();
  const hours = numberToTime(date.getHours());
  const minutes = numberToTime(date.getMinutes());
  const seconds = numberToTime(date.getSeconds());
  // ES2017 문법 padStart() & padEnd()
  // clock.textContent = `${hours}:${minutes}:${seconds}`;
  hour.textContent = hours
  minute.textContent = minutes

}
getClock();
setInterval(getClock, 1000);
// setTimeout(getClock, 기다리기원하는 시간.)

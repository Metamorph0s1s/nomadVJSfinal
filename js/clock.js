const divClock = document.querySelector("div#divClock");

function showClock() {
  const date = new Date();
  const strHour = String(date.getHours()).padStart(2, "0");
  const strMin = String(date.getMinutes()).padStart(2, "0");
  const strSec = String(date.getSeconds()).padStart(2, "0");

  divClock.innerText = `${strHour}:${strMin}:${strSec}`;
}

showClock();
setInterval(showClock, 1000);

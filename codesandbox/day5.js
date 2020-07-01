
// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const christ = document.querySelector("h1");

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const today = new Date();
  const offset = today.getTimezoneOffset() / 60;

  //console.log(offset);

  const dateArray = [
    xmasDay.getFullYear(),
    xmasDay.getMonth() + 1,
    xmasDay.getDate(),
    xmasDay.getHours(),
    xmasDay.getMinutes(),
    xmasDay.getSeconds()
  ];

  const days = Math.floor((xmasDay - today) / 1000 / 60 / 60 / 24);
  const minutes = dateArray[4] - today.getMinutes();
  const hours = dateArray[3] - today.getHours();
  const seconds = dateArray[5] - today.getSeconds();
  //console.log(dateArray[1]);
  christ.innerHTML = `${days}d 
  ${hours < 0 ? `${hours + 24}` : hours}h 
  ${minutes < 0 ? `${minutes + 60}` : minutes}m 
  ${seconds < 0 ? `${seconds + 60}` : seconds}s`;
}

function init() {
  getTime();

  setInterval(getTime, 1000);
}
init();

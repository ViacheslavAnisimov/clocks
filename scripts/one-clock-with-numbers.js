const secondHand = document.querySelector("#sec");
const minHand = document.querySelector("#min");
const hourHand = document.querySelector("#hr");

function clockRotation() {
  const date = new Date();
  const getSeconds = date.getSeconds() / 60;
  const getMinutes = date.getMinutes() / 60;
  const getHours = date.getHours() / 12;

  secondHand.style.transform = "rotate(" + getSeconds * 360 + "deg)";
  minHand.style.transform = "rotate(" + getMinutes * 360 + "deg)";
  hourHand.style.transform = "rotate(" + getHours * 360 + "deg)";

  document.querySelector(".current-day").innerHTML = date.toDateString();
  document.querySelector(".current-seconds").innerHTML = date.getSeconds();
}

setInterval(clockRotation, 1000);
clockRotation();

// function setDate() {
//   const now = new Date();
//   const seconds = now.getSeconds();
//   const secondsDegrees = (seconds / 60) * 360 + 90;
//   secondHand.forEach(sec => sec.style.transform = `rotate(${secondsDegrees}deg)`);
//   const mins = now.getMinutes();
//   const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
//   minsHand.forEach(min => min.style.transform = `rotate(${minsDegrees}deg)`);
//   const hour = now.getHours();
//   const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
//   hourHand.forEach(hour => hour.style.transform = `rotate(${hourDegrees}deg)`);
// }

// setInterval(setDate, 1000);
// setDate();

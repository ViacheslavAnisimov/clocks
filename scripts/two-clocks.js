const secondHand = document.querySelectorAll(".second-hand");
const minsHand = document.querySelectorAll(".min-hand");
const hourHand = document.getElementById('A1');
const hourHand2 = document.getElementById('B1');

document.getElementById('choose-time-zone').value = '0';

// const div = document.createElement('div');
const header = document.createElement('h1');

// div.appendChild(header);

// document.body.appendChild(div);
const box = document.getElementById('clock-2');

box.appendChild(header);

function setDate() {
  const now = new Date();
  const timeZone = document.getElementById('choose-time-zone').value;
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.forEach(sec => sec.style.transform = `rotate(${secondsDegrees}deg)`);
  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
  minsHand.forEach(min => min.style.transform = `rotate(${minsDegrees}deg)`);
  const hour = now.getUTCHours();
  const hour2 = now.getUTCHours() + +timeZone;
  const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  const hourDegrees2 = ((hour2 / 12) * 360) + ((mins / 60) * 30) + 90;
  hourHand2.style.transform = `rotate(${hourDegrees2}deg)`;
  
  //Change text in header with option's value
  var sel = document.getElementById('choose-time-zone');
  header.innerText = sel.options[sel.selectedIndex].text;
}

setInterval(setDate, 1000);
setDate();

// const secondHand = document.getElementById('A3');
// const minsHand = document.getElementById('A2');
// const hourHand = document.getElementById('A1');

// const secondHand2 = document.getElementById('B3');
// const minsHand2 = document.getElementById('B2');
// const hourHand2 = document.getElementById('B1');

// function setDate() {
//     //Get the current time
//     const now = new Date();

//     const seconds = now.getSeconds();
//     const secondsDegrees = ((seconds / 60) * 360) + 90;
//     secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
//     secondHand2.style.transform = `rotate(${secondsDegrees}deg)`;

//     const mins  = now.getMinutes();
//     const minsDegrees = ((mins / 60) * 360) + ((seconds /60) * 6) + 90;
//     minsHand.style.transform = `rotate(${minsDegrees}deg)`;
//     minsHand2.style.transform = `rotate(${minsDegrees}deg)`;

//     const hour = now.getHours();
//     //the time in the UK is eight hours bihind my time zone
//     const ukHour = hour - 8;
//     const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
//     const ukHourDegrees = ((ukHour / 12) * 360) + ((mins / 60) * 30) + 90;
//     hourHand.style.transform = `rotate(${hourDegrees}deg)`;
//     hourHand2.style.transform = `rotate(${ukHourDegrees}deg)`;

// }

// setInterval(setDate, 1000);

// setDate();
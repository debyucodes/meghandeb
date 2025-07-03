console.log("hello is this working");

// Countdown
const Days = document.getElementById("days");
const Hours = document.getElementById("hours");
const Min = document.getElementById("minutes");
const Sec = document.getElementById("seconds");

const targetDate = new Date("November 8, 2025 14:30:00").getTime();

function timer() {
  const currentDate = new Date().getTime();
  const distance = targetDate - currentDate;

  const days = Math.floor(distance / 1000 / 60 / 60 / 24);
  const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(distance / 1000 / 60) % 60;
  const seconds = Math.floor(distance / 1000) % 60;

  Days.innerHTML = days;
  Hours.innerHTML = hours;
  Min.innerHTML = minutes;
  Sec.innerHTML = seconds;

  if (distance < 0) {
    Days.innerHTML = "00";
    Hours.innerHTML = "00";
    Min.innerHTML = "00";
    Sec.innerHTML = "00";
  }
}

timer();
setInterval(timer, 1000);

// mobile menu
function showBar() {
  const mobileBar = document.querySelector(".mobile-bar");

  mobileBar.style.display = "flex";
}

function hideBar() {
  const mobileBar = document.querySelector(".mobile-bar");

  mobileBar.style.display = "none";
}

// password check

console.log("this is my fake password login, if you are reading this GG lol.");

// Get the input element once — global in this script
const inputElement = document.getElementById("password");

// Add event listener to listen for Enter key
inputElement.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    checkPassword();
  }
});

function checkPassword() {
  const enteredPassword = inputElement.value;
  const correctPassword = "MD2025";

  if (enteredPassword === correctPassword) {
    window.location.href = "main/home";
  } else {
    alert("Incorrect password.");
  }
}

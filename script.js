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

setInterval(timer, 1000);

// dicey shit
var $die = $(".die"),
  sides = 20,
  initialSide = 1,
  lastFace,
  timeoutId,
  transitionDuration = 500,
  animationDuration = 3000;

$("ul > li > a").click(function () {
  reset();
  rollTo($(this).attr("href"));

  return false;
});

function randomFace() {
  var face = Math.floor(Math.random() * sides) + initialSide;
  lastFace = face == lastFace ? randomFace() : face;
  return face;
}

function rollTo(face) {
  clearTimeout(timeoutId);

  $("ul > li > a").removeClass("active");
  $("[href=" + face + "]").addClass("active");

  $die.attr("data-face", face);
}

function reset() {
  $die.attr("data-face", null).removeClass("rolling");
}

$(".randomize, .die").click(function () {
  $die.addClass("rolling");
  clearTimeout(timeoutId);

  timeoutId = setTimeout(function () {
    $die.removeClass("rolling");

    rollTo(randomFace());
  }, animationDuration);

  return false;
});

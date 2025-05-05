// Countdown target date: 1st June 2025 at 00:00:00
const targetDate = new Date("2025-06-01T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    document.querySelector(".counter").innerHTML = "Countdown Ended";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(".ss-days").textContent = days;
  document.querySelector(".ss-hours").textContent = hours;
  document.querySelector(".ss-minutes").textContent = minutes;
  document.querySelector(".ss-seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

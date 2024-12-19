//Header and Footer
document.addEventListener("DOMContentLoaded", () => {
  const loadContent = (id, file) => {
    fetch(file)
      .then((response) => response.text())
      .then((data) => (document.getElementById(id).innerHTML = data))
      .catch((error) => console.error(`Error loading ${file}:`, error));
  };

  loadContent("header", "./header.html");
  loadContent("footer", "./footer.html");
});

//Countdown
document.addEventListener("DOMContentLoaded", () => {
  // Countdown Timer Script
  const countdownElements = document.querySelectorAll(".counting");
  const eventDate = new Date("April 24, 2025 00:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElements[0].textContent = days;
    countdownElements[1].textContent = hours;
    countdownElements[2].textContent = minutes;
    countdownElements[3].textContent = seconds;

    if (distance < 0) {
      countdownElements.forEach((el) => (el.textContent = "0"));
    }
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();
});


// loadContent.js
document.addEventListener("DOMContentLoaded", () => {
  // Header and Footer
  const loadContent = (id, file) => {
    fetch(file)
      .then((response) => response.text())
      .then((data) => (document.getElementById(id).innerHTML = data))
      .catch((error) => console.error(`Error loading ${file}:`, error));
  };

  loadContent("header", "./header.html");
  loadContent("footer", "./footer.html");
});

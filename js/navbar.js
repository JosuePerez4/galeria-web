document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("navbar-container");
  if (container) {
    fetch("../html/navbar.html")
      .then(response => response.text())
      .then(html => {
        container.innerHTML = html;
      })
      .catch(error => console.error("Error loading navbar:", error));
  }
});
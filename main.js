const navbarToggle = document.querySelector(".navbar-toggle");
const navbar = document.querySelector(".navbar");

navbarToggle.addEventListener("click", () => {
  navbar.classList.toggle("navbar--visible");
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const title = document.querySelector(".title");
      const titleSpan = document.querySelector(".title-span")
      const intro = document.querySelector(".intro")
      title.textContent = `${data.title}`;
      titleSpan.textContent = `${data.title_span}`
      intro.textContent = `${data.intro}`
    })
    .catch((error) => console.error("Error fetching JSON data:", error));
});


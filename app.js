const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menuToggle");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// On Scroll event handler
window.addEventListener("scroll", () => {
  const scroll = window.scrollY;

  if (scroll > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

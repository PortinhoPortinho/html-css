// Mobile navigation toggle for section8
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

if (btnNavEl && headerEl) {
  btnNavEl.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
  });
}

// Close mobile nav when clicking a main nav link
document.querySelectorAll(".main-nav-link").forEach(function (link) {
  link.addEventListener("click", function () {
    if (headerEl.classList.contains("nav-open"))
      headerEl.classList.remove("nav-open");
  });
});

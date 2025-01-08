const navigaion = document.querySelectorAll(".nav");
const home = document.querySelector(".home");

navigaion.forEach((el) => {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    const section = document.querySelector(id);
    section.scrollIntoView({ behavior: "smooth" });
  });
});

home.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

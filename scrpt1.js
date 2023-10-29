let nav = document.querySelector("#open");
let down = document.querySelector(".navbar_down");
var icon = ["fa-solid fa-x", "fa-solid fa-bars"]; // Değiştirilecek icon
var indeks = 0;

nav.addEventListener("click", () => {
  down.classList.toggle("active");
  nav.setAttribute("class", icon[indeks]);
  indeks = (indeks + 1) % icon.length;
});


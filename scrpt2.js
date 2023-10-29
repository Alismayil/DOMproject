let firstUp = document.querySelector(".first_up");
let firstDown = document.querySelector(".first_down");
let secondUp = document.querySelector(".second_up");
let secondDown = document.querySelector(".second_down");
let thirdUp = document.querySelector(".third_up");
let thirdDown = document.querySelector(".third_down");

firstUp.addEventListener("click", () => {
  secondDown.classList.remove("openBox");
  thirdDown.classList.remove("openBox");
  firstDown.classList.toggle("openBox");
});
secondUp.addEventListener("click", () => {
  thirdDown.classList.remove("openBox");
  firstDown.classList.remove("openBox");
  secondDown.classList.toggle("openBox");
});
thirdUp.addEventListener("click", () => {
  firstDown.classList.remove("openBox");
  secondDown.classList.remove("openBox");
  thirdDown.classList.toggle("openBox");
});




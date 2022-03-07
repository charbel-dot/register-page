const menu = document.querySelector(".header-1"); // Navigation bar class
const menuItems = document.querySelector(".menu-content");
const burger = document.querySelector(".burger");

// Colors array
const colors = ["#e63423", "#91ddff", "#d6d525"];

const randomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)]; // random color variable
};

const changeBackgroundColor = () => {
  menu.style.backgroundColor = randomColor();
};

// Change the background color every 5 seconds
setInterval(changeBackgroundColor, 5000);

// Burger button animations
burger.addEventListener("click", () => {
  burger.classList.toggle("toggle");
  // TODO fix menu
  menuItems.classList.toggle("show");
});

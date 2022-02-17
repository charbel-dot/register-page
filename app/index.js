const menu = document.querySelector(".header-1"); // Navigation bar class

// Colors array
const colors = ["#e63423", "#91ddff", "#d6d525"];

const changeBackgroundColor = () => {
  let randomColor = colors[Math.floor(Math.random() * colors.length)]; // random color variable
  menu.style.backgroundColor = randomColor;
};

// Change the background color every 5 seconds
setInterval(changeBackgroundColor, 5000);

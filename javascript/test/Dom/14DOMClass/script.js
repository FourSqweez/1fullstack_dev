// let message = document.querySelector(".message");
// //message.classList.remove("orange-box");
// //message.classList.add("green-box");

// message.classList.replace("orange-box", "green-box");

let body = document.body;
let themeButton = document.querySelector(".theme-button");

themeButton.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
});

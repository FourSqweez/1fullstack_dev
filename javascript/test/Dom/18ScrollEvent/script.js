//let scrollInfo = document.querySelector(".scroll-info");
let topHeader = document.querySelector(".top-header");
let lastScrollY = 0;

window.addEventListener("scroll", () => {
  //   let infoText = "X = " + window.scrollX;
  //   infoText += ", Y = " + window.scrollY;
  //   scrollInfo.innerHTML = infoText;

  if (window.scrollY > lastScrollY) {
    topHeader.classList.add("hide");
  } else {
    topHeader.classList.remove("hide");
  }

  lastScrollY = window.scrollY;
});

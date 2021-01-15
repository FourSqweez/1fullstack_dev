let imageIndex = 0;
let imageLinks = ["luffy.jpg", "zoro.jpg", "sunji.jpg"];
let image = document.querySelector(".image");
let prevButton = document.querySelector(".prev-button");
let nextButton = document.querySelector(".next-button");

function prevImage(event) {
  if (imageIndex > 0) {
    imageIndex--;
    image.src = "../picture/" + imageLinks[imageIndex];
  }
}

function nextImage(event) {
  if (imageIndex < imageLinks.length - 1) {
    imageIndex++;
    image.src = "../picture/" + imageLinks[imageIndex];
  }
}

function keyup(event) {
  console.log(event.key);
  if (event.key === "ArrowLeft") {
    prevImage();
  } else if (event.key === "ArrowRight") {
    nextImage();
  }
}

document.addEventListener("keyup", keyup);
prevButton.addEventListener("click", prevImage);
nextButton.addEventListener("click", nextImage);

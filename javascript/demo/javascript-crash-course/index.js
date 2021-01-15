function appendImageElem(keyword, index) {
  const imgElem = document.createElement("img");
  imgElem.src = `https://source.unsplash.com/400x225/?${keyword}&sig=${index}`;

  const galleryElem = document.querySelector(".gallery");
  galleryElem.appendChild(imgElem);
}

function removePhotos() {
  const galleryElem = document.querySelector(".gallery");
  galleryElem.innerHTML = "";
}

function searchPhotos(event) {
  const keword = event.target.value; //current value when user typing

  if (event.key === "Enter" && keword) {
    removePhotos();
    for (let i = 1; i <= 9; i++) {
      appendImageElem(keword, i);
    }
  }
}

function run() {
  const inputElem = document.querySelector("input");
  inputElem.addEventListener("keydown", searchPhotos);
}

run();

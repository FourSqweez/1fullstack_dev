const spoilButtons = document.querySelectorAll(".spoil-button");

function spoilClick(event) {
  console.log(event.target.dataset.messageId);
  const messageId = event.target.dataset.messageId;
  const message = document.querySelector("#" + messageId);
  message.classList.toggle("show");
}

spoilButtons.forEach((button) => {
  console.log(button.dataset.messageId);
  button.addEventListener("click", spoilClick);
});

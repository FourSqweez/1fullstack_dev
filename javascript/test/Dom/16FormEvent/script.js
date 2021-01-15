let answers = document.querySelectorAll(".answer");
let errorMessage = document.querySelector(".error-message");
let answerForm = document.querySelector(".answer-form");

function checkAnswers(event) {
  let tooLong = false;
  answers.forEach((answer) => {
    if (answer.value !== "") {
      if (answer.value.length > 5) {
        tooLong = true;
      }
    } else {
      console.log(answer.value);
      errorMessage.innerHTML = "กรอกก่อนไอเวร";
      errorMessage.style.display = "block";
      event.preventDefault();
    }
  });
  if (tooLong) {
    errorMessage.innerHTML = "ยาววไปปปปป";
    errorMessage.style.display = "block";
    event.preventDefault();
  }
}

// answers.forEach((answer) => {
//   answer.addEventListener("change", checkAnswers);
// });

// answers.forEach((answer) => {
//   answer.addEventListener("input", checkAnswers);
// });

answerForm.addEventListener("submit", checkAnswers);

let weight = document.querySelector('#weightInput');
let height = document.querySelector('#heightInput');
let submit = document.querySelector('.submit');
let bmiResult = document.querySelector('#bmi-result');

function checkAnswer() {
  if (weight.value === '' || height.value === '') {
    alert('กรุณากรอกข้อมูลให้ครบ');
    return;
  }
  bmiCal();
}
function bmiCal() {
  let bmi = (weight.value / (height.value / 100) ** 2).toFixed(2);
  let bodyResult = '';

  if (bmi >= 30) {
    bodyResult = 'อ้วนมาก';
  } else if (bmi >= 25) {
    bodyResult = 'อ้วน';
  } else if (bmi >= 18.6) {
    bodyResult = 'เหมาะสม';
  } else {
    bodyResult = 'ผอมเกินไป';
  }

  console.log(`BMI: ${bmi}, Your body : ${bodyResult}`);
  showBmi(bmi, bodyResult);
}

function showBmi(bmi, bodyResult) {
  bmiResult.innerHTML = `BMI ของคุณคือ : ${bmi} \n และคุณ : ${bodyResult}`;
}

submit.addEventListener('click', checkAnswer);

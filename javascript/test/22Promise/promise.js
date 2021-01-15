function inputPromise(title, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const numberInput = Number(prompt(title));
      if (isNaN(numberInput)) {
        reject(new Error("ไม่ได้กินผมหรอก"));
        return;
      }
      resolve(numberInput);
    }, delay);
  });
}
let width = 0;
let length = 0;
let height = 0;

inputPromise("ความกว้าง", 1000)
  .then((result) => {
    width = result;
    return inputPromise("ความยาว", 1500);
  })
  .then((result) => {
    length = result;
    return inputPromise("ควาามสูง", 2000);
  })
  .then((result) => {
    height = result;
    setTimeout(() => {
      const brownieSize = width * length * height;
      alert("ปริมาตรบราวนี่ = " + brownieSize);
    }, 3000);
  })
  .catch((error) => {
    alert(error.message);
  });

// Arrow function super short version
console.log("===== cuteMessage ======");

const cuteMessage = (message) => `^.^ ${message} ^.^`;
console.log(cuteMessage("น่ารัก"));

console.log("\n===== number ======");

const numbers = [1, 2, 3, 4];
const doubleNumbers = numbers.map((number) => number * 2);
console.log(numbers);
console.log(doubleNumbers);

//function with default parameters
console.log("\n===== default parameters ======");

function showMessage(message = 'เห่ยย', count = 1) {
  for (let i = 1; i <= count; i++) {
    console.log(`${i}. ${message}`);
  }
}

showMessage();
showMessage('น่ารัก')
showMessage('ไง', 3)

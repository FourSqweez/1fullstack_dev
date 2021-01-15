// 1. Pure Function
console.log("===== 1. Pure Function ======");
function addPure(a, b) {
  return a + b;
}
console.log("Pure Function: ", addPure(1, 6));

//2. Avoid Side Effect
console.log("\n===== 2. Avoid Side Effect ======");

const b = 16;
function addSideEffect(a) {
  return a + b;
}

console.log("Side Effect: ", addSideEffect(1));

//3. First class function
// 3.1 Assigning a function to variable
console.log("\n===== 3. First class function ======");
console.log("===== 3.1 Assigning a function to variable ======");

const addAssigning = function (a, b) {
  return a + b;
};

console.log("Assigning: ", addAssigning(1, 6));

// 3.2 Returning a function
console.log("\n===== 3.2 Returning a function ======");
function addReturning(a, b) {
  return function () {
    return a + b;
  };
}

const addTwoNumber = addReturning(1, 6);
console.log("Returning: ", addTwoNumber());

// 3.3 Accepting a function as an argument
console.log("\n===== 3.3 Accepting a function as an argument ======");
function addNumber(a, b) {
  return a + b;
}

function addAccepting(add, a, b) {
  return add(a, b);
}

console.log("Accepting: ", addAccepting(addNumber, 1, 6));
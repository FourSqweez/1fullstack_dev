// What'  Recursion?

function countDown(n) {
  if (n < 0) return;
  console.log("Count down: ", n);
  countDown(n - 1);
}

countDown(10);

// Why/when should we use Recursion?
// 1. Shorter and more readable
// 2. A problem can be built off of sub-problems

// How to use Recursion?

// 1. Base case
// 2. Recursive case

// f(1) = 1 => base case
// f(2) = 2 * f(1)
// f(3) = 3 * f(2)
// f(4) = 4 * f(3) => 24

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
console.log("Factorial: ", factorial(4));

// c   => c
// bc  => reverse(c) + b
// abc => reverse(bc) + a

function reverse(str) {
  if (str.length === 1) return str;
  const [firstCharacter] = str;
  const remainingCharacters = str.substring(1);
  return reverse(remainingCharacters) + firstCharacter;
}
console.log("Reverse: ", reverse("abc"));

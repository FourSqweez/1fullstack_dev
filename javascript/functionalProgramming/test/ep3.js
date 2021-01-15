/**  
 ** 4. Higher-Order Functions
** 3.2 Returning a function
** 3.3 Accepting a function as an argument
*/

const persons = [
  { name: "John", age: 17 },
  { name: "Jane", age: 10 },
  { name: "Jim", age: 15 },
];

// forEach

// for (let i = 0; i < persons.length; i++) {
//   const person = persons[i];
//   if (person.age > 15) continue;
//   console.log(`Name ${person.name}, age ${person.age}`);
// }

persons.forEach((person) =>
  console.log(`Name ${person.name}, age ${person.age}`)
);

// find, findIndex
// let jane;
// for (let i = 0; i < persons.length; i++) {
//   const person = persons[i];
//   if (person.name === "Jane") {
//     jane = person;
//     break;
//   }
// }

const jane = persons.find((person) => person.name === "Jane");
const janeIndex = persons.findIndex((person) => person.name === "Jane");
console.log("Jane : ", jane);
console.log("Jane index : ", janeIndex);

// ever, some

// let isKid = true;
// for (let i = 0; i < persons.length; i++) {
//   const person = persons[i];
//   if (person.age > 15) {
//     isKid = false;
//     break;
//   }
// }

// const isKid = persons.every((person) => person.age <= 17);
// console.log("isKid : ", isKid);

const isKid = persons.some((person) => person.age <= 9);
console.log("isKid : ", isKid);

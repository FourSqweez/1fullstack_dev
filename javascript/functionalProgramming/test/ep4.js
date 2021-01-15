const persons = [
  { name: "John", age: 17 },
  { name: "Jane", age: 10 },
  { name: "Jim", age: 15 },
];

// myFilter

// const kids = persons.filter((person) => person.age <= 15);
// console.log("Kids : ", kids);

Array.prototype.myFilter = function myFilter(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    if (callback(element)) {
      result.push(element);
    }
  }
  return result;
};

const kids = persons.myFilter((person) => person.age <= 15);
console.log("Kids : ", kids);

//myMap

// const olderPersons = persons.map((person) => ({
//   ...person,
//   age: person.age * 2,
// }));
// console.log("Older Persons : ", olderPersons);

function myMap(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    result.push(callback(element));
  }
  return result;
}


const olderPersons = myMap(persons,(person) => ({
    ...person,
    age: person.age * 2,
  }));
  console.log("Older Persons : ", olderPersons);

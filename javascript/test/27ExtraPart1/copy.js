// Copy Array
let originalPrices = [299, 599, 1299];

let salePrices = [...originalPrices];
salePrices[2] = 999;

console.log("--- Copy Array ---");
console.log("Original = " + originalPrices);
console.log("Sale = " + salePrices);

// Copy Object
let sheep1 = {
  name: "ทองหยอด",
  age: 3,
};

let sheep2 = { ...sheep1 };
sheep2.name = "ทองหยิบ";

console.log("\n--- Copy Object ---");
console.log("Sheep 1 = " + sheep1.name);
console.log("Sheep 2 = " + sheep2.name);

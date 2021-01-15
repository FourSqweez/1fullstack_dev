// Search string
console.log("====== Search string ======");
const word = "Black Earring";
const searchWord = "Ear";
const isFound = word.toLowerCase().includes(searchWord.toLowerCase());
console.log(isFound);

//Slice string
console.log("\n====== Slice string ======");

const productCode = "th-32000";
const country = productCode.slice(0, 2);
const productId = productCode.slice(3);
console.log(productCode);
console.log(country);
console.log(productId);

//Template string
console.log("\n====== Template string ======");
console.log(`Country = ${country}, ProducId = ${productId}`);

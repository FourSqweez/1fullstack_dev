const dateNow = new Date();
console.log(dateNow);

console.log("\n====== birthday int ======");
const birthday = new Date(1997, 10, 25, 8, 30);
console.log(birthday);

console.log("\n====== setEgg string ======");
const setEgg = new Date("1998-11-25");
console.log(birthday);

if (birthday < setEgg) console.log("คนจริง");




//undefined, null
console.log("====== undefined, null ======");
let username ;
console.log(username);

if (!!username) {
  console.log("มีค่า");
}

console.log("\n====== default value ======");
const displayName = username  ?? 'ค่า default';
console.log(displayName);

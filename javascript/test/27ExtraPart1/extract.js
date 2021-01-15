// Extract Object
// const name = 'ศักริ้นทร์';
// const rabbit = {
//     name: 'Mimi',
//     breed: 'Netherland Dwarf',
//     color: 'White'
// };

// const { name: rName, ...others } = rabbit;

// console.log('--- Extract Object ---')
// console.log(rName);
// console.log(others);



// Extract Array
const scores = [92, 86, 72, 60, 51];

const [firstScore, secondScore, ...otherScores] = scores;

console.log('\n--- Extract Array ---')
console.log(firstScore);
otherScores.forEach((score) =>{
    console.log(score);
})

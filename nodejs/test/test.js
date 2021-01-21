// const { menu1, specialMenu } = require('./ingredients');

// specialMenu();
// console.log(menu1);

//require + exports
//common js

// const Rabbit = require('./rabbit')

// const rabbit1 = new Rabbit('Mimi','Netherland Dwarf')

// console.log(rabbit1)

//es6 module
import Rabbit from './rabbit.js';
import { menu1, specialMenu } from './ingredients.js';

const rabbit1 = new Rabbit('Mimi', 'Netherland Dwarf');
console.log(rabbit1);

console.log(menu1);
specialMenu();

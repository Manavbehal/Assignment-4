
const reduceArray = require('./reduce');

const items = [1, 2, 3, 4, 5, 5];

const sum = reduceArray(items, (accumulator, currentValue) => accumulator + currentValue,0 );

console.log(sum); 

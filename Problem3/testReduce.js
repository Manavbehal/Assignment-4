
const reduce = require('./reduce');

const items = [1, 2, 3, 4, 5, 5];

const sum = reduce(items, (accumulator, currentValue) => accumulator + currentValue,0 );

console.log(sum); 

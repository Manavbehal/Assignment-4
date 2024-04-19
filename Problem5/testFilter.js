
const filterArray = require('./filter');

const items = [1, 2, 3, 4, 5, 5];

const filteredItems = filterArray(items, (item) => item % 2 === 0);

console.log(filteredItems);

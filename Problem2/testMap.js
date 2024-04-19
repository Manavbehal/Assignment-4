
const mapArray  = require('./map');


const items = [1, 2, 3, 4, 5, 5];

const mappedItems = mapArray(items, (item, index) => {
    return item + 1; 
});

console.log(mappedItems); 

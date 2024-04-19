
const findArray = require('./find');

const items = [1, 2, 3, 4, 5, 5];
const input = process.argv[2];

const found = findArray(items, (item) => item === parseInt(input));


if (found !== undefined) {
    console.log(`Found item: ${found}`);
} else {
    console.log('Item not found');
}
 

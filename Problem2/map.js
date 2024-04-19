function map(elements, cb) {
    const newArray = [];
    for (let i = 0; i < elements.length; i++) {
        newArray.push(cb(elements[i], i));
    }
    return newArray;
}
 module.exports = map;

const reduceArray  = require('../Problem3/reduce');

function flatten(elements) {
    return reduceArray(elements, (acc, current) => {
        if (Array.isArray(current)) {
            return acc.concat(flatten(current));
        } else {
            return acc.concat(current);
        }
    }, []);
}

module.exports = flatten;

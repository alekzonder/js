let randomArray = require('../random');
let sort = require('./improved');

// random data
let n = 10;

// let {a: input, b: valid} = randomArray(n, 100, 999);

let input = [10, 9,8,7,6,5,4,3,2,1];
let valid = [10, 9,8,7,6,5,4,3,2,1];

// sort valid
valid.sort((a, b) => a - b);

console.log('input  =', input);
console.log('valid  =', valid);

let stat = {
    iterationCount: 0,
    sort
};

// mergeSort
let output = stat.sort(input);

// output
console.log('output =', output);
console.log('\nn = ', n);
console.log('O(n^2) =', (n * n).toFixed(0));
console.log('iterationCount =', stat.iterationCount);

// verify
require('assert').deepEqual(output, valid);

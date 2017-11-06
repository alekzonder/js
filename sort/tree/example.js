let randomArray = require('../random');
let sort = require('./index');

// random data
let n = 10;

let {a: input, b: valid} = randomArray(n, 100, 999);

// let input = [1, 3, 2, 8, 6, 4, 10];
// let valid = [1, 3, 2, 8, 6, 4, 10];

// sort valid
valid.sort((a, b) => a - b);

console.log('input  =', input);
console.log('valid  =', valid);

let stat = {
    iterationCount: 0,
    sort
};

// mergeSort
let output = stat.sort(input.map(x => x));

// output
console.log('output =', output);
console.log('\nn = ', n);
// console.log('O(n^2) =', (n * n).toFixed(0));
console.log('iterationCount =', stat.iterationCount);

// verify
require('assert').deepEqual(output, valid);

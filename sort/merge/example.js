let randomArray = require('../random');
let mergeSort = require('./index');

// random data
let n = 10;

let {a: input, b: valid} = randomArray(n, 100, 999);

// sort valid
valid.sort((a, b) => a - b);

console.log('input  =', input);
console.log('valid  =', valid);

let stat = {
    iterationCount: 0,
    mergeSort
};

// mergeSort
let output = stat.mergeSort(input);

// output
console.log('output =', output);
console.log('\nn = ', n);
console.log('O(n * log2(n)) =', (n * Math.log2(n)).toFixed(0));
console.log('iterationCount =', stat.iterationCount);

// verify
require('assert').deepEqual(output, valid);

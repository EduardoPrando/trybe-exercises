/*  1 - Dada uma matriz, transforme em um array.*/
const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = (array) => array.reduce((accumulator, currentValue) => accumulator.concat(currentValue));

// console.log(flatten(arrays));
assert.deepStrictEqual(flatten(arrays), ['1', '2', '3', true, 4, 5, 6]);

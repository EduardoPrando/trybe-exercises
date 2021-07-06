/*  5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.*/

const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
 
const containsA = (names) => {
  let count = 0
  names
  .reduce((accumulator, currentValue) => accumulator += currentValue.toLowerCase(), '')
  .split('')
  .map((element) => element === 'a'? count += 1 : count);
  return count
}

assert.deepStrictEqual(containsA(names), 20);

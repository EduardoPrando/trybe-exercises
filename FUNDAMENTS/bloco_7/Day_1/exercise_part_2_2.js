// Crie uma função que receba uma frase e retorne qual a maior palavra.

let longestWord = "Antônio foi no banheiro e não sabemos o que aconteceu" // retorna 'aconteceu'

const longest = (words) => {
  let w = words.split(' ');
  w.sort((a, b) => b.length - a.length);
  return w[0];
}

console.log(longest(longestWord));

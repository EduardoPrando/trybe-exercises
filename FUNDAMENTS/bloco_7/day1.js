/* Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
  Modifique a estrutura da função para que ela seja uma arrow function .
  Modifique as concatenações para template literals .*/

// const testingScope = escopo => {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

/*  Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
Copie o código abaixo.*/

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// let oddSort = (oddsAndEvens) => oddsAndEvens.sort((a,b)=>a-b);

// console.log(oddSort(oddsAndEvens));

/*  Crie uma função que receba um número e retorne seu fatorial.
  Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
  Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .*/

// const number = n => (n === 0) ? 1 : n * number(n-1);

// console.log(number(5));

// Crie uma função que receba uma frase e retorne qual a maior palavra.

let longestWord = "Antônio foi no banheiro e não sabemos o que aconteceu" // retorna 'aconteceu'

const longest = (words) => {
  let w = words.split(' ');
  w.sort((a, b) => b.length - a.length);
  return w[0];
}

console.log(longest(longestWord));
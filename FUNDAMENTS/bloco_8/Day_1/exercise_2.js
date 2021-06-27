/*  2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou"). */

//recebendo como parâmetros o número apostado
//gerar um número aleatório entre 1 e 5
//função que checa se o número apostado é igual ao número sorteado
//retorna o resultado de um sorteio

// function checkBet (fezinha) {
//   return function (number) {
//     return number === fezinha ? 'Parabéns você ganhou' : 'Tente novamente'
//   }
// }
const checkBet = fezinha => number => number === fezinha ? 'Parabéns você ganhou' : 'Tente novamente'

const easyBaricelliNumber = Math.floor(Math.random()*(5)+1)

const fezinhaCarla = checkBet(1);
const fezinhaMaria = checkBet(2);
const fezinhaMario = checkBet(3);
const fezinhaAlo = checkBet(4);
const fezinhaRalo = checkBet(5);

console.log(`${fezinhaCarla(easyBaricelliNumber)}, Carla, você jogou 1`);
console.log(`${fezinhaMaria(easyBaricelliNumber)}, Maria, você jogou 2`);
console.log(`${fezinhaMario(easyBaricelliNumber)}, Mario, você jogou 3`);
console.log(`${fezinhaAlo(easyBaricelliNumber)}, Alo, você jogou 4`);
console.log(`${fezinhaRalo(baricelliNumber)}, Ralo, você jogou 5`);

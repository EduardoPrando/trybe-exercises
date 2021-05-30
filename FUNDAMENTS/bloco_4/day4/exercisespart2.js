/*Exercise 1
Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
Exemplo de palíndromo: arara .
verificaPalindrome('arara') ;
Retorno esperado: true
verificaPalindrome('desenvolvimento') ;
/Retorno esperado: false */

// Resolution 1
// function isAPolindromo(w) {
//   let poli = '';
//   for (let i = w.length -1; i >= 0; i -= 1){
//     poli += w[i];
//   }
//   return poli === w;
// }
// let result = isAPolindromo('jaka');
// console.log(result);

// Resolution 2
// let w = 'aka';
// function isApolindromo (word) {
//   let reverse = word.split('').reverse().join('');
//   if (reverse === word) {
//     return true;
//   } return false;
// }
// console.log(isApolindromo(w));

/*Exercise 2
Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1];.
Valor esperado no retorno da função: 4. */

// let array = [2, 3, 6, 7, 10, 1];
// function arrayBig (array) {
//   let a = array;
//   let big = '';
//   let ind = '';
//   for (let i = 0; i < a.length; i += 1) {
//     if (big < a[i]){
//       big = a[i]
//       ind = i
//     }
//   } return ind;
// }
// console.log(arrayBig(array));

/*Exercise 3
Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
Valor esperado no retorno da função: 6 . */

// let ar = [2, 4, 6, 7, 10, 0, -3];
// function arraySmal(array){
//   let a = array
//   let small = '';
//   let ind = '';
//   for (let i = 0; i < a.length; i += 1){
//     if (small > a[i]) {
//       small = a[i]
//       ind = i
//     } 
//   } return ind;
// }
// console.log(arraySmal(ar));

/*Exercise 4
Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
Valor esperado no retorno da função: Fernanda . */

// let ar = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
// function biggestName(a) {
//   let count = ''
//   for (let i = 0; i < a.length; i += 1) {
//     if (count.length < a[i].length) {
//       count = a[i]
//     }
//   } return count;

// }
// console.log(biggestName(ar))

/* Exercise 5
Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
Valor esperado no retorno da função: 2 .*/
let ar = [2, 3, 2, 5, 8, 2, 3];
function numberRepeat (a) {
  for (let i of ar) {
    for (let j = 0; j < a.length; j +=1 ){
      
    }
  }
}
console.log(numberRepeat(ar));

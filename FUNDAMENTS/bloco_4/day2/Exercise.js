//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
// Exercise 1
// for (let num of numbers) {
//   console.log(num);
// }

 // Exercise 2
// let sum = 0;
// for (let num of numbers) {
//   sum += num;
// } 
// console.log(sum);

// for (index = 0; index < numbers.length; index += 1) {
//   sum += numbers[index];
// }
// console.log(sum);

// Exercise 3
// let sum = 0;
// for (index = 0; index < numbers.length; index += 1) {
//   sum += numbers[index];
// }
// let med = sum / numbers.length;
// console.log(med);

// Exercise 4
// let sum = 0;
// for (index = 0; index < numbers.length; index += 1) {
//   sum += numbers[index];
// }
// let med = sum / numbers.length;
// if (med > 20){
//   console.log('Valor maior que 20')
// } else {
//   console.log('Valor Menor ou igual a 20')
// }

// Exercise 5
// let bigger = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] > bigger) {
//     bigger = numbers[index];
//   }
// }
// console.log(bigger);

// Exercise 6 
// let odd = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] % 2 != 0){
//     odd += 1
//   }
// } if (odd > 0) {
//   console.log(odd);
// } else {
//   console.log("Nenhum valor ímpar");
// }

// Exercise 7
// let smaller = 50;
// for (let index of numbers) {
//   if (index < smaller)
//   smaller = index
// }
// console.log(smaller)

// Exercise 8
// let array = [];

// for (let index = 0; index <= 25; index += 1) {
//   array.push(index)
// }
// console.log(array.join(','));
// font https://stackoverflow.com/questions/28620087/print-an-output-in-one-line-using-console-log

// Exercise 9
let array = [];

for (let index = 0; index <= 25; index += 1) {
  array.push(index/2)
}
console.log(array);

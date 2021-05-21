

// Exercise 1
// for (let index = 1; index < numbers.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (numbers[index] < numbers[secondIndex]) {
//       let position = numbers[index];
//       numbers[index] = numbers[secondIndex];
//       numbers[secondIndex] = position;
//     }
//   }
// }
// console.log(numbers);

// Exercise 2

// for (let index = 1; index < numbers.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (numbers[index] > numbers[secondIndex]) {
//       let position = numbers[index];
//       numbers[index] = numbers[secondIndex];
//       numbers[secondIndex] = position;
//     }
//   }
// }
// console.log(numbers);

// Exercise 3
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let multiplyNumbers = []
// for (let number = 0; number < numbers.length; number += 1) {
//   let firstmultiply = numbers[number];
//   let secondmultiply = numbers[number +1]
//   if (number != numbers.length -1) {
//     let result = firstmultiply * secondmultiply
//     multiplyNumbers.push(result);
// } else {
//   result = numbers[numbers.length-1] * 2;
//   multiplyNumbers.push(result);
//   }
// }
// console.log(multiplyNumbers);
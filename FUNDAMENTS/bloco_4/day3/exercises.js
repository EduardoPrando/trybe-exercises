// Exercise 1
// let n = 5;
// let line = '';
// if (n > 0) {
//   for (let index = 0; index < n; index += 1){
//     for (let index2 = 0; index2 < n; index2 += 1){
//       line += '*'
//     }
//     console.log(line)
//     line = '';
//   }
// } else {
//   console.log('Invalid Number')
// }


//Exercise 2
// let n = 5;
// let line = '';
// for (let index = 1; index <= n; index += 1){
//   line += '*';
//   console.log(line);
// }

//Exercise 3

let n = 5;
let space = '';
let aste = '';
for (let index = 0; index < n; index += 1){
  for (let index2 = 0; index2 < n - index; index2 += 1){
    space += ' ';
  } aste += '*';
  console.log(space, aste);
  space = ''
}
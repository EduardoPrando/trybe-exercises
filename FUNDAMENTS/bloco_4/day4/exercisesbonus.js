// EXERCISE 6
// let a = [9, 1, 2, 3, 9, 5, 7];
// function higest(array) {
//   let high = array[0];
//   for (let i = 0; i < array.length; i += 1) {
//     if (high < array[i]) {
//       high = array[i];
//     }
// }return high;
// }

// function highestCount(array) {
//   let count = 0;
//   for (let i of array) {
//     if (i === high) {
//     count += 1;
//     }
//   } return count;
// }
// console.log(highestCount())

//Exercise 10
function techList(t, n) {
  let ti = t.sort();
  let ar = []
  for (let i = 0; i < ti.length; i += 1) {
    if (ti.length === 0) {
      return ar.toString('Vazio!');
    } let obj = {}
      obj.tech = ti[i];
      obj.name = n;
      ar.push(obj)
  }
  return ar
}
let techno = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript']
let nome = 'Lucas'
console.log(techList([], nome))

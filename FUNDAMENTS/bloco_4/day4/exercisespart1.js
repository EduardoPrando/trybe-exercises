let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
// Exercise 1
// console.log('Bem-vinda, ' + info.personagem + '!');

// Exercise 2
info.recorrente = 'Sim'
// console.log(info);

// Exercise 3
// for (let i in info) {
//   console.log(i);
// }

// Exercise 4
// for (let i in info) {
//   console.log(info[i]);
  
// }
// Exercise 5
let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christimas on Bear Mountain, Dell\'s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};
console.log(info.personagem + ' e ' + info2.personagem);
console.log(info.origem + ' e ' + info2.origem);
console.log(info.nota + ' e ' + info2.nota);
if (info.recorrente == info2.recorrente){
  console.log('Ambos recorrentes');
}

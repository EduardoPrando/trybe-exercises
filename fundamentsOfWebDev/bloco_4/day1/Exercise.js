// Exercise 1

// let a = 1
// let b = 2
// let resultAddition = a + b;
// console.log('Resultado = ', resultAddition);

// let resultSubtraction = a - b;

// console.log('Resultado = ', resultSubtraction);

// let resultMultiplication = a * b;

// console.log('Resultado = ', resultMultiplication);

// let resultDivision = a / b;

// console.log('Resultado = ', resultDivision);

// let resultModule = a % b

// console.log('Resultado = ', resultModule);

// Exercise 2

// let a = 1;
// let b = 2;
// if (a > b) {
//   console.log('Primeiro valor é maior');
// } else {
//   console.log('Segundo valor é maior')
// }

// Exercise 3

// let a = 1;
// let b = 2;
// let c = 3;
// if (a > b && a > c) {
//   console.log('Primeiro valor é maior');
// } else if (b > a && b > c) {
//   console.log('Segundo valor é maior')
// } else {
//   console.log('Terceiro valor é maior')
// }

// Exercise 4
// let a = 1;
// if (a > 0) {
//   console.log('Positive');
// } else if (a < 0) {
//   console.log('Negative');
// } else {
//   console.log('Zero');
// }

// Exercise 5
let a = 45;
let b = -5;
let c = 90;
// let d = a > 0 && b > 0 && c > 0;
// let e = a + b + c
// if (d == true && e == 180){
//   console.log('Triangulo válido');
// } else {
//   console.log('Triangulo Inválido');
// }
// ...Lucas Exercise...
// if (a > 0 && b > 0 && c > 0) {
//   let angle = a + b + c; 
  
//   if(angle === 180) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// } else {
//   console.log('Error! Invalid angle');
// }

// Exerciso 6

// let chessPiece = 'King';
// let lowerPiece = chessPiece.toLowerCase();
// switch (lowerPiece){
//   case 'king':
//     console.log('Kings move one square in any direction, so long as that square is not attacked by an enemy piece. Additionally, kings are able to make a special move, know as castling.');
//     break;
//   case 'queen':
//     console.log('Queens move diagonally, horizontally, or vertically any number of squares. They are unable to jump over pieces.');
//     break;
//   case 'rooks':
//     console.log('Rooks move horizontally or vertically any number of squares. They are unable to jump over pieces. Rooks move when the king castles.');
//     break;
//   case 'bishop':
//     console.log('Bishops move diagonally any number of squares. They are unable to jump over pieces.');
//     break;
//   case 'knight':
//     console.log('Knights move in an ‘L’ shape’: two squares in a horizontal or vertical direction, then move one square horizontally or vertically. They are the only piece able to jump over other pieces.');
//     break;
//   case 'pawn':
//     console.log('Pawns move vertically forward one square, with the option to move two squares if they have not yet moved. Pawns are the only piece to capture different to how they move. Pawns capture one square diagonally in a forward direction. Pawns are unable to move backward on captures or moves. Upon reaching the other side of the board a pawn promotes into any other piece, except for a king. Additionally, pawns can make a special move named En Passant.');
//     break;
//     // Information source https://www.ichess.net/blog/chess-pieces-moves/
//   default:
//     console.log('Not a chess piece')
// }

// Exercise 7

// let score = 100;

// if (score >= 90 && score <= 100) {
//   console.log('Score A');
// } else if (score >= 80 && score < 90){
//   console.log('Score B');
// } else if (score >=70 && score < 80){
//   console.log('Score C');
// } else if (score >= 60 && score < 70){
//   console.log('Score D');
// } else if (score >= 50 && score < 60){
//   console.log('Score E');
// } else if (score >= 0 && score < 50){
//   console.log('Score F');
// } else {
//   console.log('Not a valid Score');
// }

// Exercise 8

// let number1 = 2;
// let number2 = 1;
// let number3 = 3;
// if (number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0) {
//   console.log('True');
//   //return true;
// } else {
//   console.log('False');
//   // return false;
// }

// Exercise 9

// let number1 = 2;
// let number2 = 2;
// let number3 = 2;
// if (number1 % 2 != 0 || number2 % 2 != 0 || number3 % 2 != 0) {
//   console.log('True');
//   //return true;
// } else {
//   console.log('False');
//   // return false;
// }

// Exercise 10

// let totalValue = 15;
// let cost = 10;
// let taxCost = cost + (cost * 0.2);

// if (totalValue >= 0 && cost >= 0) {
//   console.log('Profit = ', totalValue - taxCost);
// } else {
//   console.log('Invalid Value!');
// }

// Exercise 11

let salary = 3000
let discountINSS = 0;
let discountIR = 0;
if (salary >= 0) {
  if (salary <= 1556.94) {
    discountINSS = salary - (salary * 0.08);
  } else if (salary >= 1556.95 && salary < 2594.93) {
    discountINSS = salary - (salary * 0.09);
  } else if (salary >= 2594.93 && salary < 5189.82){
    discountINSS = salary - (salary * 0.11);
  } else {
    discountINSS = salary - 570.88;
  }
} else {
  console.log('Invalid salary')
}
console.log('Total discaunt INSS = ', discountINSS);

if (discountINSS > 1903.98){
  if (discountINSS > 1903.98 && discountINSS <= 2826.65) {
    discountIR = discountINSS - (discountINSS * 0.075 - 142.80);
  } else if (discountINSS >=2826.66 && discountINSS <= 3751.05) {
    discountIR = discountINSS - (discountINSS * 0.15 - 354.80) ;
  } else if (discountINSS >= 3751.06 && discountINSS < 4664.68) {
    discountIR = discountINSS - (discountINSS * 0.225 - 636.13);
  } else {
    discountIR = discountINSS - (discountINSS * 0.275 - 869.36);
  }
} else {
  console.log ('IR Isent');
}
console.log('Total discount IR = ', discountIR);
123
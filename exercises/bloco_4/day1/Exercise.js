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
// let a = 45;
// let b = 40;
// let c = 90;
// let d = a > 0 && b > 0 && c > 0;
// let e = a + b + c
// if (d == true && e == 180){
//   console.log('Triangulo válido');
// } else {
//   console.log('Triangulo Inválido');
// }

// Exerciso 6

let chessPiece = 'King';
let lowerPiece = chessPiece.toLowerCase();
switch (lowerPiece){
  case 'king':
    console.log('Kings move one square in any direction, so long as that square is not attacked by an enemy piece. Additionally, kings are able to make a special move, know as castling.');
    break;
  case 'queen':
    console.log('Queens move diagonally, horizontally, or vertically any number of squares. They are unable to jump over pieces.');
    break;
  case 'rooks':
    console.log('Rooks move horizontally or vertically any number of squares. They are unable to jump over pieces. Rooks move when the king castles.');
    break;
  case 'bishop':
    console.log('Bishops move diagonally any number of squares. They are unable to jump over pieces.');
    break;
  case 'knight':
    console.log('Knights move in an ‘L’ shape’: two squares in a horizontal or vertical direction, then move one square horizontally or vertically. They are the only piece able to jump over other pieces.');
    break;
  case 'pawn':
    console.log('Pawns move vertically forward one square, with the option to move two squares if they have not yet moved. Pawns are the only piece to capture different to how they move. Pawns capture one square diagonally in a forward direction. Pawns are unable to move backward on captures or moves. Upon reaching the other side of the board a pawn promotes into any other piece, except for a king. Additionally, pawns can make a special move named En Passant.');
    break;
    // Information source https://www.ichess.net/blog/chess-pieces-moves/
  default:
    console.log('Not a chess piece')
}
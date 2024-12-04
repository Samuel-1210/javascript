const leia = require("readline-sync");

let n1;

console.log("|---------------------------------------------------------|");
console.log("|           Bem vindo ao Programa  Par + Impar -          |");
console.log("|---------------------------------------------------------|\n");

n1 = leia.questionInt("Digite um numero inteiro\n");

if (n1 > 0 && n1 % 2 == 0) {
  console.log(`O numero ${n1} é par e positivo!`);
} else if (n1 < 0 && n1 % 2 == 0) {
  console.log(`O numero ${n1} é par e e negativo!`);
} else if (n1 > 0 && n1 % 2 != 0) {
  console.log(`O numero ${n1} é ímpar e positivo!`);
} else if (n1 < 0 && n1 % 2 != 0) {
  console.log(`O numero ${n1} é ímpar e negativo!`);
} else if (n1 == 0) {
  console.log(`O numero ${n1} é par e é um número neutro!`);
}

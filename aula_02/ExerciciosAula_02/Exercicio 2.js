const leia = require("readline-sync");

var media;

console.log("|-------------------------------------------------------|");
console.log("|Bem vindo ao Calculo de nota da escola Scholl!         |");
console.log("|-------------------------------------------------------|");

n1 = leia.questionFloat("\nDigite a primeira nota:");
n2 = leia.questionFloat("\nDigite a segunda nota:");
n3 = leia.questionFloat("\nDigite a terceira:");
n4 = leia.questionFloat("\nDigite a quarta e ultima nota:");

media = (n1 + n2 + n3 + n4) / 4;

console.log("\nA média das notas é: ");
console.log("\n ", media.toFixed(1));

if (media > 7.0) {
  console.log("\nParabéns você foi aprovado!");
} else {
  console.log("\nInfelizmente você reprovou :(");
}

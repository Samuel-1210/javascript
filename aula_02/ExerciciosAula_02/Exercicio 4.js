const leia = require("readline-sync");

var n1, n2, n3, n4, diferenca;

console.log("|---------------------------------------------------------|");
console.log("|Bem vindo ao Calculo de diferença da empresa difference! |");
console.log("|---------------------------------------------------------|");

n1 = leia.questionFloat("\n Digite o primeiro numero: ");
n2 = leia.questionFloat("\n Digite o segundo numero: ");
n3 = leia.questionFloat("\n Digite o terceiro numero: ");
n4 = leia.questionFloat("\n Digite o quarto numero: ");

diferenca = n1 * n2 - n3 * n4;

console.log("\n Segue a diferença dos números: ");
console.log(" ", diferenca.toFixed(1));

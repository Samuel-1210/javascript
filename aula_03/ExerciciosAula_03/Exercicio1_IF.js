const leia = require("readline-sync");

let v1, v2, v3;

console.log("|---------------------------------------------------------|");
console.log("|      Bem vindo ao Programa - Maior - Menor - Igual      |");
console.log("|---------------------------------------------------------|\n");

v1 = leia.questionInt("Digite o valor  A: \n");
v2 = leia.questionInt("Digite o valor B: \n");
v3 = leia.questionInt("Digite o valor C: \n");

if (v1 + v2 > v3) {
  console.log("A soma de A+B: ", v1 + v2, " é maior do que C: ", v3);
} else if (v1 + v2 < v3) {
  console.log("A soma de A+B: ", v1 + v2, " é menor do que C: ", v3);
} else if (v1 + v2 == v3) {
  console.log("A soma de A+B: ", v1 + v2, " é igual a C: ", v3);
} else {
  //Por mais que o questionInt só permita ler números
  //Em caso de alguma inserçao diferente disso, cairá nesse else.
  console.log("Digite um valor válido!");
}

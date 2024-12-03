const leia = require("readline-sync");

var salario, abono;

console.log("|-------------------------------------------------------|");
console.log("|Bem vindo ao Calculo de salário da empresa Enterprise! |");
console.log("|-------------------------------------------------------|");

salario = leia.questionFloat("\nDigite seu salario:");
abono = leia.questionFloat("\nDigite o valor do abono salarial:");

console.log("\nO novo valor do salario é:\n");

var novoSalario = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
}).format(salario + abono);

console.log(novoSalario);

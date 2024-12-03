const leia = require("readline-sync");

var salBruto, addNoturno, hExtra, desc, salLiq;

console.log("|-------------------------------------------------------|");
console.log("|Bem vindo ao Calculo de salário liquido!               |");
console.log("|-------------------------------------------------------|");

salBruto = leia.questionFloat("\nDigite seu Salario Bruto: ");
addNoturno = leia.questionFloat("\nDigite o Adicional Noturno: ");
hExtra = leia.questionFloat("\nDigite as Horas Extras: ");
desc = leia.questionFloat("\nDigite os Descontos: ");

var real = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

salLiq = salBruto + addNoturno + hExtra * 5 - desc;

console.log(
  "O salário líquido após calculo de horas noturnas e descontos é: \n"
);

console.log(real.format(salLiq));

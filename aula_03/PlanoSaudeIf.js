const leia = require("readline-sync");

let nome, idade, valor;

console.log("|---------------------------------------------------------|");
console.log("|         Bem vindo ao Calculo de plano de saúde!         |");
console.log("|---------------------------------------------------------|");

nome = leia.question("Digite seu nome: \n");
idade = leia.questionInt("Digite sua idade: \n");

if (idade < 0) {
  console.log("Idade negativa, entre com um número positivo");
  process.exit(0)
} else if (idade >= 0 && idade <= 10) {
  valor = 100.0;
} else if (idade >= 11 && idade <= 29) {
  valor = 200.0;
} else if (idade >= 29 && idade <= 45) {
  valor = 300.0;
} else if (idade >= 45 && idade <= 59) {
  valor = 500.0;
} else if (idade >= 59 && idade <= 65) {
  valor = 600.0;
} else {
  valor = 1000.0;
}

console.log(
  `O valor do Plano de Saúde do(a) ${nome} é: R$ ${valor.toFixed(2)}`
);

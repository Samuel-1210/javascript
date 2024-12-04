const leia = require("readline-sync");

let nome, faixaEtaria, valor;

console.log("|---------------------------------------------------------|");
console.log("|         Bem vindo ao Calculo de plano de saúde!         |");
console.log("|---------------------------------------------------------|\n");

nome = leia.question("Digite seu nome: \n");

console.log("*******Faixas Etárias*******\n");
console.log("1 - Idade entre 0 e 10 anos ");
console.log("2 - Idade entre 11 e 29 anos");
console.log("3 - Idade entre 30 e 45 anos");
console.log("4 - Idade entre 46 e 59 anos");
console.log("5 - Idade entre 60 e 65 anos");
console.log("6 - Idade acima de 66 anos  \n");

faixaEtaria = leia.questionInt("Digite a sua faixa etaria: \n");

switch (faixaEtaria) {
  case 1:
    valor = 100.0;
    break;

  case 2:
    valor = 200.0;
    break;
  case 3:
    valor = 300.0;
    break;
  case 4:
    valor = 400.0;
    break;
  case 5:
    valor = 500.0;
    break;
  case 6:
    valor = 1000.0;
    break;
  default:
    console.log("Digite um valor válido!");
    process.exit(0);
}

console.log(
  `O valor do Plano de Saúde do(a) ${nome} é: R$ ${valor.toFixed(2)}`
);

const leia = require("readline-sync");

let nome, cargo, sal, salReaj;

console.log("|---------------------------------------------------------|");
console.log("|          Bem vindo ao Calculo salário ajustado          |");
console.log("|---------------------------------------------------------|\n");

nome = leia.question("Digite seu nome: \n");

console.log(`\nOlá ${nome}, insira o código do seu cargo atual:`);
console.log("Cargos ");
console.log("1 - Gerente ");
console.log("2 - Vendedor ");
console.log("3 - Supervisor ");
console.log("4 - Motorista ");
console.log("5 - Estoquista ");
console.log("6 - Técnnico de TI ");

cargo = leia.questionInt("");

sal = leia.questionFloat("Qual seu salario atual?\nR$ ");

switch (cargo) {
  case 1:
    console.log("O cargo selecionado foi 1 - Gerente");
    salReaj = sal + sal * 0.1;
    console.log("O novo salário com reajuste é R$ ", salReaj.toFixed(2));
    break;
  case 2:
    console.log("O cargo selecionado foi 2 - Vendedor");
    salReaj = sal + sal * 0.07;
    console.log("O novo salário com reajuste é R$ ", salReaj.toFixed(2));
    break;
  case 3:
    console.log("O cargo selecionado foi 3 - Supervisor");
    salReaj = sal + sal * 0.09;
    console.log("O novo salário com reajuste é R$ ", salReaj.toFixed(2));
    break;

  case 4:
    console.log("O cargo selecionado foi 4 - Motorista");
    salReaj = sal + sal * 0.06;
    console.log("O novo salário com reajuste é R$ ", salReaj.toFixed(2));
    break;

  case 5:
    console.log("O cargo selecionado foi 5 - Estoquista");
    salReaj = sal + sal * 0.05;
    console.log("O novo salário com reajuste é R$ ", salReaj.toFixed(2));
    break;

  case 6:
    console.log("O cargo selecionado foi 6 - Técnico de TI");
    salReaj = sal + sal * 0.08;
    console.log("O novo salário com reajuste é R$ ", salReaj.toFixed(2));
    break;
  default:
    console.log("Digite um código de cargo válido(1-6)!");
    break;
}

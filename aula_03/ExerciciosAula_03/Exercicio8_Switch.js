const leia = require("readline-sync");

let opc,
  saldo = 1000.0;

var real = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

console.log("|---------------------------------------------------------|");
console.log("|             Bem vindo ao BANCO DO DINHEIRO              |");
console.log("|---------------------------------------------------------|\n");

console.log("Qual opção deseja executar?\n");
console.log(" __________________________");
console.log("|    Opcão 1: SALDO        |");
console.log("|    Opcão 2: SAQUE        |");
console.log("|    Opcão 3: DEPOSITO     |");
console.log("|__________________________|");

opc = leia.questionInt("Insira a opcao desejada e aperte ENTER!\n");

switch (opc) {
  case 1:
    console.log("A opção seleciona foi 1: SALDO\n");
    console.log("O Saldo atual de sua conta bancária é:\n");
    console.log(real.format(saldo));
    break;
  case 2:
    console.log("A opção seleciona foi 2: SAQUE\n");
    let valor = leia.questionInt("Qual valor a ser retirado?\n");
    if (valor > saldo) {
      console.log("Saldo Insuficiente!\n");
    } else {
      saldo -= valor;
      console.log(
        "Saque realizado com sucesso, o novo saldo da sua conta bancária é :\n"
      );
      console.log(real.format(saldo));
    }
    break;
  case 3:
    console.log("A opção seleciona foi 3: DEPOSITO\n");
    let depo = leia.questionInt("Qual valor a ser depositado?\n");
    saldo += depo;
    console.log(
      "Deposito realizado com sucesso, o novo saldo da sua conta bancária é :\n"
    );
    console.log(real.format(saldo));
    break;
  default:
    console.log("A opção selecionada é invalida\n");
}

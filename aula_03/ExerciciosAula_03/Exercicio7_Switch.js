const leia = require("readline-sync");

let n1, n2, op, res;

console.log("|---------------------------------------------------------|");
console.log("|                 Bem vindo a Calculadora                 |");
console.log("|---------------------------------------------------------|\n");

n1 = leia.questionFloat("Digite o primeiro numero: \n");
n2 = leia.questionFloat("Digite o segundo numero\n");

console.log("Código |    Operação     |");
console.log("   1 + |      Soma       |");
console.log("   2 - |    Subtração    |");
console.log("   3 * |  Multiplicação  |");
console.log("   4 / |     Divisão     |");
console.log("   5 % |     Módulo      |");
console.log("   6 ^ |   Potenciação   |\n");

op = leia.questionInt(
  "Qual operacao deseja executar? Insira o codigo respectivo (1-6):\n"
);

switch (op) {
  case 1:
    console.log("A operação seleciona foi 1 - Soma");
    res = n1 + n2;
    console.log(`Resolução: ${n1} + ${n2} = `, res.toFixed(1));
    break;

  case 2:
    console.log("A operação seleciona foi 2 - Subtração");
    res = n1 - n2;
    console.log(`Resolução: ${n1} - ${n2} = `, res.toFixed(1));
    break;

  case 3:
    console.log("A operação seleciona foi 3 - Multiplicação");
    res = n1 * n2;
    console.log(`Resolução: ${n1} * ${n2} = `, res.toFixed(1));
    break;

  case 4:
    if (n2 == 0) {
      console.log("Não é possível dividir por 0!");
    } else {
      console.log("A operação seleciona foi 4 - Divisão");
      res = n1 / n2;
      console.log(`Resolução: ${n1} / ${n2} = `, res.toFixed(1));
    }
    break;

  case 5:
    console.log("A operação seleciona foi 5 - Módulo");
    res = n1 % n2;
    console.log(
      `Resolução: ${n1} % ${n2} (Resto da divisao)= `,
      res.toFixed(1)
    );
    break;

  case 6:
    console.log("A operação seleciona foi 6 - Potenciação");
    res = Math.pow(n1, n2);
    console.log(`Resolução: ${n1} ^ ${n2} = `, res.toFixed(1));
    break;

  default:
    console.log("Digite um código de produto válido!");
    break;
}

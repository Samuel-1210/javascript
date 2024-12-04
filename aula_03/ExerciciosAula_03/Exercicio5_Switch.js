const leia = require("readline-sync");

let produto, qtd, valor;

console.log("|---------------------------------------------------------|");
console.log("|         Bem vindo ao Programa do Samuel Lanches         |");
console.log("|---------------------------------------------------------|\n");

console.log("Lista de produtos:\n");
console.log("Código | Produto         | Preço  ");
console.log("   1   | Cachorro Quente |R$ 10.00");
console.log("   2   | X-Salada        |R$ 15.00");
console.log("   3   | X-Bacon         |R$ 18.00");
console.log("   4   | Bauru           |R$ 12.00");
console.log("   5   | Refrigerante    |R$ 8.00 ");
console.log("   6   | Suco de Laranja |R$ 13.00\n");

produto = leia.questionInt("Digite o codigo do produto:\n");
qtd = leia.questionInt("Digite a quantidade desejada:\n");

switch (produto) {
  case 1:
    console.log("O produto selecionado foi 1 - Cachorro Quente");
    valor = 10.0 * qtd;
    console.log("O valor total da compra foi: R$ ", valor.toFixed(2));
    break;

  case 2:
    console.log("O produto selecionado foi 2 - X-Salada");
    valor = 15.0 * qtd;
    console.log("O valor total da compra foi: R$ ", valor.toFixed(2));
    break;

  case 3:
    console.log("O produto selecionado foi 3 - X-Bacon");
    valor = 18.0 * qtd;
    console.log("O valor total da compra foi: R$ ", valor.toFixed(2));
    break;

  case 4:
    console.log("O produto selecionado foi 4 - Bauru");
    valor = 12.0 * qtd;
    console.log("O valor total da compra foi: R$ ", valor.toFixed(2));
    break;

  case 5:
    console.log("O produto selecionado foi 5 - Refrigerante");
    valor = 8.0 * qtd;
    console.log("O valor total da compra foi: R$ ", valor.toFixed(2));
    break;

  case 6:
    console.log("O produto selecionado foi 6 - Suco de laranja");
    valor = 13.0 * qtd;
    console.log("O valor total da compra foi: R$ ", valor.toFixed(2));
    break;

  default:
    console.log("Digite um código de produto válido!");
    break;
}

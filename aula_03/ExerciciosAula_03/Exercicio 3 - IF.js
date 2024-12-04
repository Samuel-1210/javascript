const leia = require("readline-sync");

let idade, nome, primeiraDoacao, resposta, apto;

console.log("|---------------------------------------------------------|");
console.log("|         Bem vindo a clinica de coleta de sangue         |");
console.log("|---------------------------------------------------------|");

nome = leia.question("Digite seu nome: \n");
idade = leia.questionInt("Digite sua idade: \n");
resposta = leia.question(
  "E sua primeira doacao de sangue?\nResponda com 'sim' ou 'nao'\n"
);

// Se for sim, a declaração vai retornar true para a variavel primeiraDoacao
primeiraDoacao = resposta === "sim";

if (idade >= 18 && idade <= 69) {
  apto = true;
  if (apto && idade >= 60 && idade <= 69 && primeiraDoacao) {
    console.log(
      `${nome} não está apto(a) a doar sangue pois é a primeira doação e com essa idade não é permitido`
    );
  } else {
    console.log(`${nome} está apto(a) a doar sangue`);
  }
} else {
  console.log(
    `${nome} não está apto(a) a doar sangue devido a idade nao estar entre 18 ou 69`
  );
}

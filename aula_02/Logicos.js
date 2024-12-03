const leia = require("readline-sync");

// Dados Usuário

const usuario = "user@email.com.br";
const senha = "user1234";
const isAdmin = false;
const isGerent = true;
const isBlock = false;

console.log("\nTela de Login");

let usuariologin = leia.question("Digite o seu usuario: ");
let senhaLogin = leia.question("Digite a sua senha: ", {
  hideEchoBack: true,
});

if (usuariologin === usuario && senhaLogin === senha) {
  var mensagem = "Seja Bem Vinde! Usuário autenticado com Sucesso!";
} else {
  var mensagem = "Acesso negado!";
}
console.log(mensagem);

if (!isBlock) {
  console.log("Usuário ativo!");
} else {
  console.log("Usuário está inativo! Contate o Administrador");
  process.exit(0);
}

if (isAdmin || isGerent) {
  console.log("Acesso ao Painel Administratativo liberado.");
} else {
  console.log("Acesso ao Painel Administrativo Negado");
}

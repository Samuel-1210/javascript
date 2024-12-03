let nome = "Samuel";
let profissao = "Pessoa Desenvolvedora";
let salarioBruto = 3500.44;
const bonus = 0.05;

console.log("\nNome: ", nome);
console.log("Profisissão: ", profissao);

let salario = new Intl.NumberFormat("pt-BR", {
	style: "currency",
	currency: "BRL",
}).format(salarioBruto + bonus * salarioBruto);

console.log("Salário Liquido: ", salario);
// Interpolação de Strings
console.log("O Salário Bruto do Colaborador " + nome + " é " + salarioBruto);
console.log(`O Salário Bruto do Colaborador ${nome} é ${salario}`);

// console.log("\nNome: ", nome)

// console.log("\Tipo da variável: ",typeof nome)

// nome = 12;

// console.log("\nNome: ", nome)

// console.log("\Tipo da variável: ",typeof nome)

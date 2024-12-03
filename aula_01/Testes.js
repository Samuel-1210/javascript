const leia = require("readline-sync")
let n1, n2;

n1 = leia.questionInt("Digite o primeiro numero: ")
n2 = leia.questionInt("Digite o segundo numero: ")

console.log("A variável N1 possui o valor: ", n1)

console.log("A variável N2 possui o valor: ", n2)

console.log("\nA Soma de n1 + n2 é igual a: ", n1 + n2)
console.log("\nA Subtração de n1 - n2 é igual a: ", n1 - n2)
console.log("\nA Multiplicação de n1 * n2 é igual a: ", n1 * n2)
console.log("\nA Divisão de n1 + n2 é igual a: ", n1 / n2)
console.log("\nA Potenciacao de n1 ^ n2 é igual a: ", Math.pow(n1,n2))
console.log("\nA raiz quadrada de n1 é igual a: ", Math.sqrt(n1))
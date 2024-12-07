const leia = require("readline-sync")

let numero,
  soma = 0,
  media = 0

do {
  numero = leia.questionInt("Digite um numero: \n")
  if (numero % 3 === 0 && numero != 0) {
    soma += numero
    media++
  }
} while (numero != 0)

console.log(
  `A media de todos os numeros multiplos de 3 é: ${(soma / media).toFixed(2)} `
)

console.log(`A soma de todos os numeros multiplos de 3 é: ${soma} `)

console.log(`A quantidade de numeros multiplos de 3 é: ${media} `)

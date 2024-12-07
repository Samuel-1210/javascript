const leia = require("readline-sync")

let numero,
  somaPositivo = 0,
  somaNegativo = 0
do {
  numero = leia.questionInt("Digite um numero: \n")
  if (numero > 0) somaPositivo += numero
  else somaNegativo += numero
} while (numero != 0)

console.log(`A soma dos numeros positivos e: ${somaPositivo} `)
console.log(`A soma dos numeros negativos e: ${somaNegativo} `)

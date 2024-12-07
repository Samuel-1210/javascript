"use strict"

const leia = require("readline-sync")

let vetor = [],
  soma = 0
for (let i = 0; i < 10; i++) {
  vetor[i] = leia.questionInt(
    `Digite um numero para armazenar na posicao ${i + 1} do vetor: \n`
  )
  soma += vetor[i]
}
console.log("Elementos nos indices impares")
for (let i = 1; i < vetor.length; i += 2) {
  process.stdout.write(vetor[i] + " ")
}
console.log("\nElementos pares")
for (let i = 0; i < vetor.length; i++) {
  if (vetor[i] % 2 == 0) {
    process.stdout.write(vetor[i] + " ")
  }
}

console.log("\nSoma:", soma)
console.log("Media:", (soma / vetor.length).toFixed(2))

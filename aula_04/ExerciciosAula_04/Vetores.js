"use strict"

const leia = require("readline-sync")

const vetor = [6, 5, 11, 3, 4, 9, 7, 8, 10, 1]
let maior = vetor[0],
  menor = vetor[0]

for (let i = 0; i < vetor.length; i++) {
  if (vetor[i] > maior) {
    maior = vetor[i]
    var posicao = i
  }
  if (vetor[i] < menor) menor = vetor[i]
}

console.log("O maior numero é: ", maior, " na posicao ", posicao + 1)
console.log("O menor numero é: ", menor)
console.log(vetor)

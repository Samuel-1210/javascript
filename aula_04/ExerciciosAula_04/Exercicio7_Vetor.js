"use strict"

const leia = require("readline-sync")

const vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6]
var encontrado = false

let numero = leia.questionInt("Digite o numero que voce deseja encontrar: \n")

for (let i = 0; i < vetor.length; i++) {
  if (numero == vetor[i]) {
    console.log(`O número ${numero} está localizado na posição ${i}`)
    encontrado = true
  }
}
if (!encontrado) console.log(`O número ${numero} não foi encontrado!`)

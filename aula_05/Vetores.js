const leia = require("readline-sync")

let vetorInteiros = new Array(5)

let vetorNumeros = [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]

let vetorStrings = [
  "Boxer",
  "Pastor Alemão",
  "Pinscher",
  "Husky Siberiano",
  "Corgi",
]

for (let indice = 0; indice < vetorStrings.length; indice++) {
  console.log(`${indice + 1}º elemento: ${vetorStrings[indice]}`)
}

// for (let contador = 0; contador < vetorInteiros.length; contador++) {
//   vetorInteiros[contador] = leia.questionInt("Digite um numero: ")
// }

console.table(vetorInteiros)

console.table(vetorStrings.sort())

console.table(vetorNumeros.sort((a, b) => a - b))

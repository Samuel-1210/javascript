const leia = require("readline-sync")

let matrizInteiros = new Array(2)

for (let indice = 0; indice < matrizInteiros.length; indice++) {
  matrizInteiros[indice] = Array(3)
}

for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++) {
  for (
    let indiceColuna = 0;
    indiceColuna < matrizInteiros[indiceLinha].length;
    indiceColuna++
  ) {
    matrizInteiros[indiceLinha][indiceColuna] =
      leia.questionInt("Digite um numero: ")
  }
}

console.table(matrizInteiros)

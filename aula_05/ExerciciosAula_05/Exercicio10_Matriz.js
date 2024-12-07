const leia = require("readline-sync")

const matrizNota = Array(10),
  vetorNota = Array(10)
let media = 0

for (let indice = 0; indice < matrizNota.length; indice++) {
  matrizNota[indice] = Array(4)
}

for (let linha = 0; linha < 10; linha++) {
 
  media = 0
  
  console.log(`\n${linha + 1}*Aluno`)
  for (let coluna = 0; coluna < 4; coluna++) {
    
    matrizNota[linha][coluna] = leia
      .questionFloat(`Digite a : ${coluna + 1}* nota\n`)
      .toFixed(1)

    media += parseFloat(matrizNota[linha][coluna])
  }
  vetorNota[linha] = (media / 4).toFixed(1)
}

console.table(matrizNota)

for (let indice = 0; indice < vetorNota.length; indice++) {
  console.log(`Media do ${indice + 1}º Aluno: ${vetorNota[indice]}`)
}

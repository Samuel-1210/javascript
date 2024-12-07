const leia = require("readline-sync")

let idade = 0,
  menor = 0,
  maior = 0,
  qtdIdade = 0

while (idade >= 0) {
  idade = leia.questionInt("Digite uma idade: \n")
  if (idade >= 0) {
    qtdIdade++
    if (idade < 21) menor++
    else if (idade > 50) maior++
  }
}

console.log(`Total de pessoas menores de 21 anos: ${menor}`)
console.log(`Total de pessoas maiores de 50 anos: ${maior}`)
console.log(`Totalizando um total de ${qtdIdade} pessoas`)

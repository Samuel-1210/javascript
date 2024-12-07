const leia = require("readline-sync")

let idade,
  identidade = -1,
  area = -1,
  novoColaborador = "s",
  contagem = 0,
  backend = 0,
  frontend = 0,
  mobile = 0,
  fullstack = 0,
  somaIdade = 0,
  hCisTrans40 = 0,
  mCisTransFront = 0,
  nBinarioFull30 = 0,
  mulherCis = 0,
  homemCis = 0,
  naoBinario = 0,
  mulherTrans = 0,
  homemTrans = 0,
  outros = 0

while (novoColaborador === "s") {
  contagem++
  idade = leia.questionInt("Digite sua idade: \n")
  console.log("\n| Código |   Identidade   |")
  console.log("|   1    |  Mulher Cis    |")
  console.log("|   2    |  Homem Cis     |")
  console.log("|   3    |  Não Binário   |")
  console.log("|   4    |  Mulher Trans  |")
  console.log("|   5    |  Homem Trans   |")
  console.log("|   6    |  Outros        |")

  while (identidade < 1 || identidade > 6) {
    identidade = leia.questionInt(
      "Digite o codigo correspondente a sua identidade de genero: (1-6)\n"
    )
  }

  if (identidade === 1) mulherCis++
  if (identidade === 2) homemCis++
  if (identidade === 3) naoBinario++
  if (identidade === 4) mulherTrans++
  if (identidade === 5) homemTrans++
  if (identidade === 6) outros++

  console.log("\nArea da pessoa Desenvolvedora")
  console.log("| Código |    Area    |")
  console.log("|   1    |  Backend   |")
  console.log("|   2    |  Frontend  |")
  console.log("|   3    |  Mobile    |")
  console.log("|   4    |  Fullstack |")

  while (area < 1 || area > 4) {
    area = leia.questionInt(
      "Digite o codigo correspondente a sua area no desenvolvimento: (1-4)\n"
    )
  }

  if (area === 1) backend++
  if (area === 2) frontend++
  if (area === 3) mobile++
  if (area === 4) fullstack++

  if (area == 2 && (identidade == 1 || identidade == 4)) mCisTransFront++

  if (area == 3 && idade > 40 && (identidade == 2 || identidade == 5))
    hCisTrans40++

  if (idade < 30 && identidade == 3 && area == 4) nBinarioFull30++

  if (idade >= 0) somaIdade += idade

  novoColaborador = leia
    .question("Deseja inserir um novo colaborador? (S/N)\n")
    .toLowerCase()
  ;(area = -1), (identidade = -1)
}
console.log(`Total de Mulheres Cis: ${mulherCis}`)
console.log(`Total de Homens Cis: ${homemCis}`)
console.log(`Total de pessoas Não Binárias: ${naoBinario}`)
console.log(`Total de Mulheres Trans: ${mulherTrans}`)
console.log(`Total de Homens Trans: ${homemTrans}`)
console.log(`Total de Outras identidades: ${outros}\n`)

console.log(`Total de Desenvolvedores Backend: ${backend}`)
console.log(`Total de Desenvolvedores Frontend: ${frontend}`)
console.log(`Total de Desenvolvedores Mobile: ${mobile}`)
console.log(`Total de Desenvolvedores Fullstack: ${fullstack}\n`)

console.log(
  `Total de Mulheres Cis e Trans desenvolvedoras Frontend: ${mCisTransFront}`
)

console.log(
  `Total de Homens Cis e Trans desenvolvedoras maiores de 40 anos: ${hCisTrans40}`
)

console.log(
  `Total de Pessoas Nao Binarias desenvolvedoras FullStack menores de 30 anos: ${nBinarioFull30}`
)

console.log(`O numero total de pessoas que responderam a pesquisa: ${contagem}`)

console.log(
  `A media de idade das pessoas que responderam a pesquisa: ${(
    somaIdade / contagem
  ).toFixed(1)}`
)

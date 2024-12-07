const leia = require("readline-sync")

let n1,
  n2,
  qtdMultiplos = 0

n1 = leia.questionInt("Digite o primeiro numero: \n")
n2 = leia.questionInt("Digite o segundo numero: \n")

if (n1 > n2) {
  console.log("Intervalo inválido!")
  process.exit(0)
} else {
  for (let i = n1; i < n2; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(`${i} é multiplo de 3 e 5`)
      qtdMultiplos++
    }
  }
  console.log(`\nTotalizando ${qtdMultiplos} números múltiplos de 3 e 5`)
}

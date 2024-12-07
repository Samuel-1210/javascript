const leia = require("readline-sync")

let pares = 0,
  impares = 0

for (let i = 1; i <= 10; i++) {
  numero = leia.questionInt(`Digite o ${i} numero:\n`)

  if (numero % 2 == 0) pares++
  else impares++
}

console.log(`Total de números pares: ${pares}`)
console.log(`Total de números pares: ${impares}`)

console.log(
  `Totalizando uma porcentagem de ${((pares / 10) * 100).toFixed(1)}% pares`
)
console.log(
  `Totalizando uma porcentagem de ${((impares / 10) * 100).toFixed(1)}% impares`
)

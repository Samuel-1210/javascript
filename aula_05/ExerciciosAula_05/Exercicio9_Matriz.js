"use strict"

const leia = require("readline-sync")

// Define o valor das somas para inicio 0, e cria um array com 3 posicoes(1 linha) [0,0,0]
let somaPrincipal = 0,
  somaSecundaria = 0,
  matrizInteiros = Array(3)

// Do indice 0, enquanto for menor que 3, repetira a ação (3 vezes)
// Cada repetição insere na linha(do numero indice) 3 posicoes

// matrizInteiro[0] = array(3)
// matrizInteiro[1] = array(3)
// matrizInteiro[2] = array(3)
// resultando em 3 linhas

for (let indice = 0; indice < matrizInteiros.length; indice++) {
  matrizInteiros[indice] = Array(3)
}

// Agora por padrão, dois laços FOR que vão executar a seguinte sequencia: 0,0 - 0,1 - 0,2 - 1,0 - 1,1 - 1,2 - 2,0 - 2,1 - 2,2
// Para cada execução ele preenche a respectiva linha/coluna
for (let linha = 0; linha < matrizInteiros.length; linha++) {
  for (let coluna = 0; coluna < matrizInteiros.length; coluna++) {
    matrizInteiros[linha][coluna] = leia.questionInt("Digite um numero: \n")
  }
}
// Hora de exibir os elementos da diagonal principal
// Sabemos que independente do tamanho ser 3x3 ou 10x10 a diagonal sempre será feita em linhas/colunas de incide igual 0,0 - 1,1 - 2,2 - 3,3 etc.
console.log("\nElementos da Diagonal Principal")

for (let linha = 0; linha < matrizInteiros.length; linha++) {
  for (let coluna = 0; coluna < matrizInteiros.length; coluna++) {
    // Caso a coluna e linha do indice atual seja igual, é mostrado o conteudo daquela linha/coluna
    // E é realizado a soma do mesmo
    if (linha == coluna) {
      process.stdout.write("" + matrizInteiros[linha][coluna] + " ")
      somaPrincipal += matrizInteiros[linha][coluna]
    }
  }
}

// Logica usada:
// Enquanto a principal inicia na primeira linha e na primeira coluna (index 0,0)
// A secundaria inicia sua diagonal na primeina linha, porém na ultima coluna

// Porém o tamanho da matriz é 3.
// Para atingir a ultima coluna, o contador de coluna deve estar em 2. Pois os indices são (0,1,2).
// Para atingir as condições:

// na linha 0, para atingir a ultima coluna, eu preciso que o index da coluna seja 2 (pois seria a ultima coluna) e armazeno o valor do index 0,2
//
// na linha 1, para atingir a condição do tamanho da matriz(3-1), eu preciso que o index da coluna seja 1
// Sendo a linha 1 e coluna 1 eu vou armazenar o conteudo que está no index 1,1 seguindo a diagonal para esquerda

// na linha 2, para atingir a condição do tamanho da matriz(3-1), eu não preciso do valor da coluna, pois o index de linha ja é igual a matriz(3-1)
// então o if armazena o que está alocado no index 2,0

// para tamanhos maiores de matriz, o codigo ficaria extenso de IF's, entao deve ter alguma lógica pra melhorar isso.

console.log("\nElementos da Diagonal Secundária")
for (let linha = 0; linha < matrizInteiros.length; linha++) {
  for (let coluna = 0; coluna < matrizInteiros.length; coluna++) {
    
    if (linha == 0 && coluna == matrizInteiros.length - 1) {
      process.stdout.write("" + matrizInteiros[linha][coluna] + " ")
      somaSecundaria += matrizInteiros[linha][coluna]
    } 
    
    else if (linha == 1 && coluna == matrizInteiros.length - 2) {
      process.stdout.write("" + matrizInteiros[linha][coluna] + " ")
      somaSecundaria += matrizInteiros[linha][coluna]
    } 
    
    else if (linha == 2 && coluna == matrizInteiros.length - 3) {
      process.stdout.write("" + matrizInteiros[linha][coluna] + " ")
      somaSecundaria += matrizInteiros[linha][coluna]
    }
  }
}

console.log("\nSoma dos Elementos da diagonal Principal: ", somaPrincipal)

console.log("\nSoma dos Elementos da diagonal Secundaria: ", somaSecundaria)
console.log()
console.table(matrizInteiros)

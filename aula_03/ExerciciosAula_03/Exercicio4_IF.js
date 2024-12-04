const leia = require("readline-sync");

let subClass, classeAnimal, dieta;

console.log("|---------------------------------------------------------|");
console.log("|              Bem vindo ao QUAL É O ANIMAL               |");
console.log("|---------------------------------------------------------|");

console.log("Vamos encontrar um animal! Digite a subclassificação desejada!\n");
console.log(" Vertebrado ou Invertebrado?\n");

subClass = leia.question("Insira a subclassificacao: \n").toLowerCase();

if (subClass == "vertebrado") {
  console.log("\nAve ou Mamifero");
  classeAnimal = leia.question("Insira a classe do animal!\n").toLowerCase();
  if (classeAnimal == "ave") {
    console.log("\nCarnivoro ou Onivoro");
    dieta = leia.question("Insira a dieta do animal!\n").toLowerCase();
    if (dieta == "carnivoro") {
      console.log(
        "\nO animal que possui todas essas caracteristicas é a Águia"
      );
    } else if (dieta == "onivoro") {
      console.log(
        "\nO animal que possui todas essas caracteristicas é a Pomba"
      );
    } else {
      console.log("Digite uma dieta valida!");
      process.exit(0);
    }
  } else if (classeAnimal == "mamifero") {
    console.log("\nOnivoro ou Herbivoro");
    dieta = leia.question("Insira a dieta do animal!\n").toLowerCase();
    if (dieta == "onivoro") {
      console.log(
        "\nO animal que possui todas essas caracteristicas é o Homem"
      );
    } else if (dieta == "herbivoro") {
      console.log("\nO animal que possui todas essas caracteristicas é a Vaca");
    } else {
      console.log("Digite uma dieta valida!");
    }
  } else {
    console.log("Digite uma Classe animal valida!");
    process.exit(0);
  }
} else if (subClass == "invertebrado") {
  console.log("\nInseto ou Anelideo");
  classeAnimal = leia.question("Insira a classe do animal!\n").toLowerCase();
  if (classeAnimal == "inseto") {
    console.log("\nHematofago ou Herbivoro");
    dieta = leia.question("Insira a dieta do animal!\n").toLowerCase();
    if (dieta == "hematofago") {
      console.log(
        "\nO animal que possui todas essas caracteristicas é a Pulga"
      );
    } else if (dieta == "herbivoro") {
      console.log(
        "\nO animal que possui todas essas caracteristicas é a Lagarta"
      );
    } else {
      console.log("Digite uma dieta valida!");
      process.exit(0);
    }
  } else if (classeAnimal == "anelideo") {
    console.log("\nHematofago ou Onivoro");
    dieta = leia.question("Insira a dieta do animal!\n").toLowerCase();
    if (dieta == "hematofago") {
      console.log(
        "\nO animal que possui todas essas caracteristicas é o Sanguessuga"
      );
    } else if (dieta == "onivoro") {
      console.log(
        "\nO animal que possui todas essas caracteristicas é a Minhoca"
      );
    } else {
      console.log("Digite uma dieta valida!");
    }
  } else {
    console.log("Digite uma Classe animal valida!");
    process.exit(0);
  }
} else {
  console.log("Digite uma Sub Classificação Válida");
  process.exit(0);
}

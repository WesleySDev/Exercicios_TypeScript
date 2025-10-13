/*Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são: "Telefonou para a vítima?" "Esteve nenhum local comete crime?" "Mora perto da vítima?" "Devia para a vítima?" "Já trabalhou com a vítima?"

O programa deve no final emitir uma classificação sobre a participação da pessoa no crime.

Se uma pessoa responder positivamente a 2 questões ela deve ser definida como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente". */

let respostas = 0;

let pergunta1: string = "não"; // telefonou para a vítima?
let pergunta2: string = "não"; // esteve nenhum local comete crime?
let pergunta3: string = "não"; // mora perto da vítima?
let pergunta4: string = "não"; // devia para a vítima?
let pergunta5: string = "não"; // já trabalhou com a vítima?

if (pergunta1 == "sim") {
  respostas++; // soma 1 se a pergunta 1 for sim
}
if (pergunta2 == "sim") {
  respostas++; // soma 1 se a pergunta 2 for sim
}
if (pergunta3 == "sim") {
  respostas++; // soma 1 se a pergunta 3 for sim
}
if (pergunta4 == "sim") {
  respostas++; // soma 1 se a pergunta 4 for sim
}
if (pergunta5 == "sim") {
  respostas++; // soma 1 se a pergunta 5 for sim
}

if (respostas == 2) {
  console.log("Suspeita");
} else if (respostas == 3 || respostas == 4) {
  console.log("Cúmplice");
} else if (respostas == 5) {
  console.log("Assassino");
} else {
  console.log("Inocente");
}

console.log(respostas);

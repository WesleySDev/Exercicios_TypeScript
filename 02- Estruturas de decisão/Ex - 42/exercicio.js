/*Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são: "Telefonou para a vítima?" "Esteve nenhum local comete crime?" "Mora perto da vítima?" "Devia para a vítima?" "Já trabalhou com a vítima?"

O programa deve no final emitir uma classificação sobre a participação da pessoa no crime.

Se uma pessoa responder positivamente a 2 questões ela deve ser definida como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente". */
var respostas = 0;
var pergunta1 = "não";
var pergunta2 = "não";
var pergunta3 = "não";
var pergunta4 = "não";
var pergunta5 = "não";
if (pergunta1 == "sim") {
    respostas++;
}
if (pergunta2 == "sim") {
    respostas++;
}
if (pergunta3 == "sim") {
    respostas++;
}
if (pergunta4 == "sim") {
    respostas++;
}
if (pergunta5 == "sim") {
    respostas++;
}
if (respostas == 2) {
    console.log("Suspeita");
}
else if (respostas == 3 || respostas == 4) {
    console.log("Cúmplice");
}
else if (respostas == 5) {
    console.log("Assassino");
}
else {
    console.log("Inocente");
}
console.log(respostas);

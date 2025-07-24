/*
Faça um Programa que exige em que você estuda. Peça para digitar M-matutino ou V-Vespertino ou N-Noturno.

Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.
*/
var periodo = "M"; // Pode ser "M", "V" ou "N"
var mensagem;
if (periodo === "M") {
    mensagem = "Bom Dia!"; // Matutino
}
else if (periodo === "V") {
    mensagem = "Boa Tarde!"; // Vespertino
}
else if (periodo === "N") {
    mensagem = "Boa Noite!"; // Noturno
}
else {
    mensagem = "Valor Inválido!"; // Valor inválido
}
console.log("Per\u00EDodo: ".concat(periodo));
console.log("Mensagem: ".concat(mensagem)); // Exibe a mensagem correspondente ao período

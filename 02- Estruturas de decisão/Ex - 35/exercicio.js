/*Faça um Programa que peça um número correspondente a um determinado ano e em seguida
informe se este ano é ou não bissexto. */
var ano = 2024; // Ano a ser verificado
var mensagem;
if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    mensagem = "é um ano bissexto."; // Ano bissexto
}
else {
    mensagem = "não é um ano bissexto."; // Ano não bissexto
}
console.log("O ano ".concat(ano, " ").concat(mensagem)); // Exibe o resultado

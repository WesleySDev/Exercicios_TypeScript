/* Faça um Programa que peça um número correspondente a um determinado ano e em seguida informe se este ano é ou não bissexto. */
var ano = 2024; // Ano a ser verificado
var ehBissexto; // Variável para armazenar se o ano é bissexto ou não
if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    ehBissexto = true;
}
else {
    ehBissexto = false;
}
console.log("O ano ".concat(ano, " ").concat(ehBissexto ? "é" : "não é", " bissexto."));

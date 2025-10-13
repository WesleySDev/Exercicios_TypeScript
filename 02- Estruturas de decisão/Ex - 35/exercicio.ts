/*Faça um Programa que peça um número correspondente a um determinado ano e em seguida 
informe se este ano é ou não bissexto. */

let ano: number = 2024; // Ano a ser verificado
let mensagem: string;
if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
  mensagem = "é um ano bissexto."; // Ano bissexto
} else {
  mensagem = "não é um ano bissexto."; // Ano não bissexto
}
console.log(`O ano ${ano} ${mensagem}`); // Exibe o resultado

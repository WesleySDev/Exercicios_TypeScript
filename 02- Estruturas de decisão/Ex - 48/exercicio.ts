/* Faça um Programa que peça um número correspondente a um determinado ano e em seguida informe se este ano é ou não bissexto. */
let ano: number = 2024; // Ano a ser verificado
let ehBissexto: boolean; // Variável para armazenar se o ano é bissexto ou não

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
  ehBissexto = true;
} else {
  ehBissexto = false;
}

console.log(`O ano ${ano} ${ehBissexto ? "é" : "não é"} bissexto.`);

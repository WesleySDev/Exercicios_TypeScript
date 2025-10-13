"use strict";
/*Faça um Programa para uma caixa eletrônica.

O programa deverá perguntar ao usuário o valor do saque e depois informar quantas notas de cada valor serão fornecidas.

As notas disponíveis serão de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais.

O programa não deve se preocupar com a quantidade de notas existentes na máquina.

Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;

Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece notas três de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1. */
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function processarSaque(valorSaque) {
    var notasDe100 = 0;
    var notasDe50 = 0;
    var notasDe10 = 0;
    var notasDe5 = 0;
    var notasDe1 = 0;
    if (valorSaque >= 10 && valorSaque <= 600) {
        notasDe100 = Math.floor(valorSaque / 100); // Quantidade de notas de 100
        valorSaque = valorSaque % 100; // Resto da divisão por 100
        notasDe50 = Math.floor(valorSaque / 50);
        valorSaque = valorSaque % 50;
        notasDe10 = Math.floor(valorSaque / 10);
        valorSaque = valorSaque % 10;
        notasDe5 = Math.floor(valorSaque / 5);
        valorSaque = valorSaque % 5;
        notasDe1 = Math.floor(valorSaque / 1);
        valorSaque = valorSaque % 1;
        console.log("Notas de 100: ".concat(notasDe100));
        console.log("Notas de 50: ".concat(notasDe50));
        console.log("Notas de 10: ".concat(notasDe10));
        console.log("Notas de 5: ".concat(notasDe5));
        console.log("Notas de 1: ".concat(notasDe1));
        console.log("Valor restante: ".concat(valorSaque.toFixed(2)));
    }
    else {
        console.log("Valor inválido");
    }
}
rl.question("Digite o que deseja sacar (mínimo 10 reais, máximo 600 reais): ", function (input) {
    var valorSaque = Number(input);
    processarSaque(valorSaque);
    rl.close();
});

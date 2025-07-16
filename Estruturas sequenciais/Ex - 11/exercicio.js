/*
Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
o produto do dobro do primeiro com metade do segundo.
 a soma do triplo do primeiro com o terceiro. o terceiro elevado ao cubo.
*/
var numeroInteiro1 = 6;
var numeroInteiro2 = 3;
var numeroReal = 4.5;
var produto = 2 * numeroInteiro1 * (numeroInteiro2 / 2);
var soma = 3 * numeroInteiro1 + numeroReal;
var cubo = Math.pow(numeroReal, 3);
console.log("O produto do dobro do primeiro n\u00FAmero com metade do segundo \u00E9 ".concat(produto, "."));
console.log("A soma do triplo do primeiro n\u00FAmero com o terceiro \u00E9 ".concat(soma, "."));
console.log("O terceiro n\u00FAmero elevado ao cubo \u00E9 ".concat(cubo, "."));

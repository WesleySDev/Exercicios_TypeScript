"use strict";
/*
Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
o produto do dobro do primeiro com metade do segundo.
 a soma do triplo do primeiro com o terceiro. o terceiro elevado ao cubo.
*/
let numeroInteiro1 = 6;
let numeroInteiro2 = 3;
let numeroReal = 4.5;
let produto = 2 * numeroInteiro1 * (numeroInteiro2 / 2);
let soma = 3 * numeroInteiro1 + numeroReal;
let cubo = Math.pow(numeroReal, 3);
console.log(`O produto do dobro do primeiro número com metade do segundo é ${produto}.`);
console.log(`A soma do triplo do primeiro número com o terceiro é ${soma}.`);
console.log(`O terceiro número elevado ao cubo é ${cubo}.`);

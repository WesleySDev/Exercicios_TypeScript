/*
Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre: 
o produto do dobro do primeiro com metade do segundo.
 a soma do triplo do primeiro com o terceiro. o terceiro elevado ao cubo.
*/

let numeroInteiro1: number = 6;
let numeroInteiro2: number = 3;
let numeroReal: number = 4.5;
let produto: number = 2 * numeroInteiro1 * (numeroInteiro2 / 2);
let soma: number = 3 * numeroInteiro1 + numeroReal;
let cubo: number = Math.pow(numeroReal, 3);
console.log(
  `O produto do dobro do primeiro número com metade do segundo é ${produto}.`
);
console.log(`A soma do triplo do primeiro número com o terceiro é ${soma}.`);
console.log(`O terceiro número elevado ao cubo é ${cubo}.`);

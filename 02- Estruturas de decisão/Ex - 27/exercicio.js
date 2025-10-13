"use strict";
/*
Faça um Programa que leia três números e mostre-os em ordem decrescente.
*/
let numero1 = 30;
let numero2 = 20;
let numero3 = 10;
let maior;
let meio;
let menor;
if (numero1 >= numero2 && numero1 >= numero3) {
    maior = numero1; // Se numero1 é o maior
    if (numero2 >= numero3) {
        meio = numero2; // Se numero2 é o segundo maior
        menor = numero3; // Se numero3 é o menor
    }
    else {
        meio = numero3; // Se numero3 é o segundo maior
        menor = numero2; // Se numero2 é o menor
    }
}
else if (numero2 >= numero1 && numero2 >= numero3) {
    maior = numero2; // Se numero2 é o maior
    if (numero1 >= numero3) {
        meio = numero1; // Se numero1 é o segundo maior
        menor = numero3; // Se numero3 é o menor
    }
    else {
        meio = numero3; // Se numero3 é o segundo maior
        menor = numero1; // Se numero1 é o menor
    }
}
else {
    maior = numero3; // Se numero3 é o maior
    if (numero1 >= numero2) {
        meio = numero1; // Se numero1 é o segundo maior
        menor = numero2; // Se numero2 é o menor
    }
    else {
        meio = numero2; // Se numero2 é o segundo maior
        menor = numero1; // Se numero1 é o menor
    }
}
console.log(`Número 1: ${numero1}`);
console.log(`Número 2: ${numero2}`);
console.log(`Número 3: ${numero3}`);
console.log(`Números em ordem decrescente: ${maior}, ${meio}, ${menor}`); // Exibe os números em ordem decrescente

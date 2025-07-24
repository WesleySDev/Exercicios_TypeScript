/*
Faça um Programa que leia três números e mostre-os em ordem decrescente.
*/
var numero1 = 30;
var numero2 = 20;
var numero3 = 10;
var maior;
var meio;
var menor;
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
console.log("N\u00FAmero 1: ".concat(numero1));
console.log("N\u00FAmero 2: ".concat(numero2));
console.log("N\u00FAmero 3: ".concat(numero3));
console.log("N\u00FAmeros em ordem decrescente: ".concat(maior, ", ").concat(meio, ", ").concat(menor)); // Exibe os números em ordem decrescente

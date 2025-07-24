/*
Faça um Programa que leia três números e mostre o maior e o menor deles.
*/
var numero1 = 10;
var numero2 = 20;
var numero3 = 15;
var maior;
var menor;
if (numero1 >= numero2 && numero1 >= numero3) {
    maior = numero1; // Se numero1 é maior ou igual a numero2 e numero3
}
else if (numero2 >= numero1 && numero2 >= numero3) {
    maior = numero2; // Se numero2 é maior ou igual a numero1 e numero3
}
else {
    maior = numero3; // Se numero3 é maior que numero1 e numero2
}
if (numero1 <= numero2 && numero1 <= numero3) {
    menor = numero1; // Se numero1 é menor ou igual a numero2 e numero3
}
else if (numero2 <= numero1 && numero2 <= numero3) {
    menor = numero2; // Se numero2 é menor ou igual a numero1 e numero3
}
else {
    menor = numero3; // Se numero3 é menor que numero1 e numero2
}
console.log("N\u00FAmero 1: ".concat(numero1));
console.log("N\u00FAmero 2: ".concat(numero2));
console.log("N\u00FAmero 3: ".concat(numero3));
console.log("Maior n\u00FAmero: ".concat(maior)); // Exibe o maior número encontrado
console.log("Menor n\u00FAmero: ".concat(menor)); // Exibe o menor número encontrado

/*
Faça um Programa que leia três números e mostre o maior deles.
*/

let numero1: number = 10;
let numero2: number = 20;
let numero3: number = 15;
let maior: number;
if (numero1 >= numero2 && numero1 >= numero3) {
  maior = numero1; // Se numero1 é maior ou igual a numero2 e numero3
} else if (numero2 >= numero1 && numero2 >= numero3) {
  maior = numero2; // Se numero2 é maior ou igual a numero1 e numero3
} else {
  maior = numero3; // Se numero3 é maior que numero1 e numero2
}
console.log(`Número 1: ${numero1}`);
console.log(`Número 2: ${numero2}`);
console.log(`Número 3: ${numero3}`);
console.log(`Maior número: ${maior}`); // Exibe o maior número encontrado

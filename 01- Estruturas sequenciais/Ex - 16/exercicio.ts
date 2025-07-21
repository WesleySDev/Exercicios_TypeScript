/*
Faça um programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada.
Considere que a cobertura de tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custa R$ 80,00.
Informe ao usuário as quantidades de latas de tinta que serão compradas e o preço total.

*/

let area: number = 54;
let coberturaPorLitro: number = 3; // Cobertura de tinta em metros quadrados por litro
let litrosNecessarios: number = area / coberturaPorLitro; // Litros de tinta necessários
let litrosPorLata: number = 18;
let precoPorLata: number = 80;
let latasNecessarias: number = Math.ceil(litrosNecessarios / litrosPorLata); // Latas necessárias, arredondadas para cima
let precoTotal: number = latasNecessarias * precoPorLata;
console.log(`Área a ser pintada: ${area} m²`);
console.log(`Litros de tinta necessários: ${litrosNecessarios.toFixed(2)} L`);
console.log(`Latas de tinta necessárias: ${latasNecessarias}`);
console.log(`Preço total: R$ ${precoTotal.toFixed(2)}`);

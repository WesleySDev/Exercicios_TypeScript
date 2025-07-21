/*
Faça um programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada.
Considere que a cobertura de tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custa R$ 80,00.
Informe ao usuário as quantidades de latas de tinta que serão compradas e o preço total.

*/
var area = 54;
var coberturaPorLitro = 3; // Cobertura de tinta em metros quadrados por litro
var litrosNecessarios = area / coberturaPorLitro; // Litros de tinta necessários
var litrosPorLata = 18;
var precoPorLata = 80;
var latasNecessarias = Math.ceil(litrosNecessarios / litrosPorLata); // Latas necessárias, arredondadas para cima
var precoTotal = latasNecessarias * precoPorLata;
console.log("\u00C1rea a ser pintada: ".concat(area, " m\u00B2"));
console.log("Litros de tinta necess\u00E1rios: ".concat(litrosNecessarios.toFixed(2), " L"));
console.log("Latas de tinta necess\u00E1rias: ".concat(latasNecessarias));
console.log("Pre\u00E7o total: R$ ".concat(precoTotal.toFixed(2)));

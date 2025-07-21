/*
Faça um Programa para uma loja de tintas.

O programa deverá pedir o tamanho em metros quadrados da área a ser pintada.

Considere que a cobertura de tinta é de 1 litro para cada 6 metros quadrados e que a tinta é vendida em latas de 18 litros, que custa R$ 80,00 ou em galões de 3,6 litros, que custa R$ 25,00.

Informe ao usuário as quantidades de tinta a serem compradas e os preços relevantes em 3 situações:

comprar apenas latas de 18 litros;
comprar apenas galões de 3,6 litros;
misturar latas e galões, de forma que o preço seja o menor.
Acrescente 10% de folga e sempre arredonde os valores para cima,
 isto é, considere latas cheias.
*/

let area: number = 54; // Área a ser pintada em metros quadrados
let coberturaPorLitro: number = 6; // Cobertura de tinta em metros quadrados por litro
let litrosNecessarios: number = area / coberturaPorLitro;
let litrosPorLata: number = 18;
let precoPorLata: number = 80;
let litrosPorGalao: number = 3.6;
let precoPorGalao: number = 25;
let folga: number = 1.1; // 10% de folga

litrosNecessarios *= folga; // Acrescenta 10% de folga
let latasNecessarias: number = Math.ceil(litrosNecessarios / litrosPorLata); // Latas necessárias, arredondadas para cima
let precoTotalLatas: number = latasNecessarias * precoPorLata; // Preço total das latas
let galoesNecessarios: number = Math.ceil(litrosNecessarios / litrosPorGalao); // Galões necessários, arredondados para cima
let precoTotalGaloes: number = galoesNecessarios * precoPorGalao; // Preço total dos galões
let latasParaMisturar: number = Math.floor(litrosNecessarios / litrosPorLata); // Latas que podem ser compradas
let litrosRestantes: number =
  litrosNecessarios - latasParaMisturar * litrosPorLata; // Litros restantes após comprar latas
let galoesParaMisturar: number = Math.ceil(litrosRestantes / litrosPorGalao); // Galões necessários para os litros restantes
let precoTotalMistura: number =
  latasParaMisturar * precoPorLata + galoesParaMisturar * precoPorGalao; // Preço total da mistura
console.log(`Área a ser pintada: ${area} m²`);
console.log(`Litros de tinta necessários: ${litrosNecessarios.toFixed(2)} L`);
console.log(`Latas de tinta necessárias: ${latasNecessarias}`);
console.log(`Preço total (apenas latas): R$ ${precoTotalLatas.toFixed(2)}`);
console.log(`Galões de tinta necessários: ${galoesNecessarios}`);
console.log(`Preço total (apenas galões): R$ ${precoTotalGaloes.toFixed(2)}`);
console.log(`Latas para mistura: ${latasParaMisturar}`);
console.log(`Galões para mistura: ${galoesParaMisturar}`);
console.log(
  `Preço total (misturando latas e galões): R$ ${precoTotalMistura.toFixed(2)}`
);

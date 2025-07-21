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
var area = 54; // Área a ser pintada em metros quadrados
var coberturaPorLitro = 6; // Cobertura de tinta em metros quadrados por litro
var litrosNecessarios = area / coberturaPorLitro; // Litros de tinta necessários
var litrosPorLata = 18; // Litros por lata
var precoPorLata = 80; // Preço por lata
var litrosPorGalao = 3.6; // Litros por galão
var precoPorGalao = 25; // Preço por galão
var folga = 1.1; // 10% de folga
litrosNecessarios *= folga; // Acrescenta 10% de folga
var latasNecessarias = Math.ceil(litrosNecessarios / litrosPorLata); // Latas necessárias, arredondadas para cima
var precoTotalLatas = latasNecessarias * precoPorLata; // Preço total das latas
var galoesNecessarios = Math.ceil(litrosNecessarios / litrosPorGalao); // Galões necessários, arredondados para cima
var precoTotalGaloes = galoesNecessarios * precoPorGalao; // Preço total dos galões
var latasParaMisturar = Math.floor(litrosNecessarios / litrosPorLata); // Latas que podem ser compradas
var litrosRestantes = litrosNecessarios - latasParaMisturar * litrosPorLata; // Litros restantes após comprar latas
var galoesParaMisturar = Math.ceil(litrosRestantes / litrosPorGalao); // Galões necessários para os litros restantes
var precoTotalMistura = latasParaMisturar * precoPorLata + galoesParaMisturar * precoPorGalao; // Preço total da mistura
console.log("\u00C1rea a ser pintada: ".concat(area, " m\u00B2"));
console.log("Litros de tinta necess\u00E1rios: ".concat(litrosNecessarios.toFixed(2), " L"));
console.log("Latas de tinta necess\u00E1rias: ".concat(latasNecessarias));
console.log("Pre\u00E7o total (apenas latas): R$ ".concat(precoTotalLatas.toFixed(2)));
console.log("Gal\u00F5es de tinta necess\u00E1rios: ".concat(galoesNecessarios));
console.log("Pre\u00E7o total (apenas gal\u00F5es): R$ ".concat(precoTotalGaloes.toFixed(2)));
console.log("Latas para mistura: ".concat(latasParaMisturar));
console.log("Gal\u00F5es para mistura: ".concat(galoesParaMisturar));
console.log("Pre\u00E7o total (misturando latas e gal\u00F5es): R$ ".concat(precoTotalMistura.toFixed(2)));

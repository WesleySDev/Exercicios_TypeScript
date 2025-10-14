/*Preço com Desconto

Descrição: Peça o preço original de um produto e uma porcentagem de desconto. Calcule e mostre o preço final após o desconto.

Exemplo de Entrada/Saída:

Digite o preço original do produto: 100
Digite a porcentagem de desconto: 15
O preço com desconto é: 85.0

 */
var precoOriginal = 100; // Preço original do produto
var porcentagemDesconto = 15; // Porcentagem de desconto
var desconto = (precoOriginal * porcentagemDesconto) / 100; // Cálculo do valor do desconto
var precoFinal = precoOriginal - desconto; // Cálculo do preço final após o desconto
console.log("O pre\u00E7o com desconto \u00E9: ".concat(precoFinal)); // Exibição do preço final com desconto
console.log("\nC\u00E1lculo realizado com sucesso!"); // Mensagem de sucesso

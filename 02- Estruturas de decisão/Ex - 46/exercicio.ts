/*Preço com Desconto

Descrição: Peça o preço original de um produto e uma porcentagem de desconto. Calcule e mostre o preço final após o desconto.

Exemplo de Entrada/Saída:

Digite o preço original do produto: 100
Digite a porcentagem de desconto: 15
O preço com desconto é: 85.0

 */

let precoOriginal: number = 100; // Preço original do produto
let porcentagemDesconto: number = 15; // Porcentagem de desconto
let desconto: number = (precoOriginal * porcentagemDesconto) / 100; // Cálculo do valor do desconto
let precoFinal: number = precoOriginal - desconto; // Cálculo do preço final após o desconto
console.log(`O preço com desconto é: ${precoFinal}`); // Exibição do preço final com desconto
console.log(`\nCálculo realizado com sucesso!`); // Mensagem de sucesso

//Descrição: Peça o preço original de um produto e a porcentagem de desconto. Calcule e mostre o preço final após o desconto.
var PrecoOriginall = 150;
var porcentagem = 25;
var calculo = (porcentagem / 100) * PrecoOriginall;
var precoFinall = PrecoOriginall - calculo;
console.log(precoFinall);

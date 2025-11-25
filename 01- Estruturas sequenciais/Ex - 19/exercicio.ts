//Descrição: Peça o preço original de um produto e a porcentagem de desconto. Calcule e mostre o preço final após o desconto.

let PrecoOriginall: number = 150;
let porcentagem: number = 25;
let calculo = (porcentagem / 100) * PrecoOriginall
let precoFinall = PrecoOriginall - calculo

console.log(precoFinall)
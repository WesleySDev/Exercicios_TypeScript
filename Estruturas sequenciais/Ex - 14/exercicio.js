/*
João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho.
Toda vez que ele trouxer um peso de peixes maior que o previsto pelo regulamento de pesca do estado de São Paulo
(50 quilos) deverá pagar uma multa de R$ 4,00 por quilo excedente.
João precisa que você faça um programa que leia a variável peso (peso de peixes) e calcule o excesso.
Gravar na variável excesso a quantidade de quilos além do limite e na multa variável o valor da multa que João deverá pagar.
Imprima os dados do programa com as mensagens apropriadas.
*/
var pesoPeixes = 60; // Peso de peixes em quilos
var limitePeso = 50; // Limite de peso permitido
var multaPorQuilo = 4; // Valor da multa por quilo excedente
var excesso = pesoPeixes - limitePeso; // Cálculo do excesso de peso
var multa = excesso * multaPorQuilo; // Cálculo da multa
if (excesso > 0) {
    console.log("Peso de peixes: ".concat(pesoPeixes, " kg"));
    console.log("Excesso: ".concat(excesso, " kg"));
    console.log("Multa a pagar: R$ ".concat(multa.toFixed(2)));
}

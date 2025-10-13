/*
João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho.
Toda vez que ele trouxer um peso de peixes maior que o previsto pelo regulamento de pesca do estado de São Paulo 
(50 quilos) deverá pagar uma multa de R$ 4,00 por quilo excedente.
João precisa que você faça um programa que leia a variável peso (peso de peixes) e calcule o excesso.
Gravar na variável excesso a quantidade de quilos além do limite e na multa variável o valor da multa que João deverá pagar. 
Imprima os dados do programa com as mensagens apropriadas.
*/

let pesoPeixes: number = 60; // Peso de peixes em quilos
let limitePeso: number = 50; // Limite de peso permitido
let multaPorQuilo: number = 4; // Valor da multa por quilo excedente
let excesso: number = pesoPeixes - limitePeso; // Cálculo do excesso de peso
let multa: number = excesso * multaPorQuilo; // Cálculo da multa
if (excesso > 0) {
  console.log(`Peso de peixes: ${pesoPeixes} kg`);
  console.log(`Excesso: ${excesso} kg`);
  console.log(`Multa a pagar: R$ ${multa.toFixed(2)}`);
}

/*
Faça um Programa que pergunta quanto você ganha por hora e o número de horas trabalhadas no mês.
 Calcule e mostre o total do seu salário no referido mês.
*/

let ganhoPorHora: number = 20;
let horasTrabalhadas: number = 160;
let salarioMensal: number = ganhoPorHora * horasTrabalhadas;
console.log(`Seu salário mensal é R$ ${salarioMensal.toFixed(2)}.`);

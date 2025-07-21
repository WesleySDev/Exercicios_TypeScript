/*
Faça um Programa que pergunta quanto você ganha por hora e o número de horas trabalhadas no mês.
Calcule e mostre o total do seu salário no mês específico, sabendo-se que são descontados 11% para o Imposto de Renda, 8% para o INSS e 5% para o sindicato, faça um programa que nos dê: salário bruto. quanto pagou ao INSS. quanto pagou ao sindicato. o salário líquido. calcule os descontos e o salário líquido, conforme tabela abaixo:
+ Salário Bruto : R$
- IR (11%) : R$
- INSS (8%) : R$
- Sindicato ( 5%) : R$
= Salário Liquido : R$
Obs.: Salário Bruto - Descontos = Salário Líquido.
*/
var ganhoPorHora = 20; // Ganho por hora
var horasTrabalhadas = 160; // Horas trabalhadas no mês
var salarioBruto = ganhoPorHora * horasTrabalhadas; // Cálculo do salário bruto
var descontoIR = salarioBruto * 0.11; // Desconto do Imposto de Renda (11%)
var descontoINSS = salarioBruto * 0.08; // Desconto do INSS (8%)
var descontoSindicato = salarioBruto * 0.05; // Desconto do sindicato (5%)
var salarioLiquido = salarioBruto - (descontoIR + descontoINSS + descontoSindicato); // Cálculo do salário líquido
console.log("Sal\u00E1rio Bruto: R$ ".concat(salarioBruto.toFixed(2)));
console.log("Desconto IR (11%): R$ ".concat(descontoIR.toFixed(2)));
console.log("Desconto INSS (8%): R$ ".concat(descontoINSS.toFixed(2)));
console.log("Desconto Sindicato (5%): R$ ".concat(descontoSindicato.toFixed(2)));
console.log("Sal\u00E1rio L\u00EDquido: R$ ".concat(salarioLiquido.toFixed(2)));

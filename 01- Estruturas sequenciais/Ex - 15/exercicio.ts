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

let ganhoPorHora: number = 20; // Ganho por hora
let horasTrabalhadas: number = 160; // Horas trabalhadas no mês
let salarioBruto: number = ganhoPorHora * horasTrabalhadas; // Cálculo do salário bruto
let descontoIR: number = salarioBruto * 0.11; // Desconto do Imposto de Renda (11%)
let descontoINSS: number = salarioBruto * 0.08; // Desconto do INSS (8%)
let descontoSindicato: number = salarioBruto * 0.05; // Desconto do sindicato (5%)

let salarioLiquido: number =
  salarioBruto - (descontoIR + descontoINSS + descontoSindicato); // Cálculo do salário líquido
console.log(`Salário Bruto: R$ ${salarioBruto.toFixed(2)}`);
console.log(`Desconto IR (11%): R$ ${descontoIR.toFixed(2)}`);
console.log(`Desconto INSS (8%): R$ ${descontoINSS.toFixed(2)}`);
console.log(`Desconto Sindicato (5%): R$ ${descontoSindicato.toFixed(2)}`);
console.log(`Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`);

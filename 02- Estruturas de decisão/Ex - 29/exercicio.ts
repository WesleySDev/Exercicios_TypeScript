/*
As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e eles os contrataram para desenvolver o programa que calculará os reajustes.

Faça um programa que recebe o salário de um colaborador e reajuste segundo os seguintes sorteios, com base no salário atual:

salários até R$ 280,00 (incluindo) : aumento de 20%
salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
salários de R$ 1500,00 em diante :
    aumento de 5% Após o aumento ser realizado,
informe na tela:
    o salário antes do reajuste;
    o percentual de aumento aplicado;
    o valor do aumento;
    o novo salário, após o aumento.
*/

let salario: number = 1000; // Salário atual
let percentual: number;
let aumento: number;
if (salario <= 280) {
  percentual = 20; // Aumento de 20%
} else if (salario > 280 && salario <= 700) {
  percentual = 15; // Aumento de 15%
} else if (salario > 700 && salario <= 1500) {
  percentual = 10; // Aumento de 10%
} else {
  percentual = 5; // Aumento de 5%
}
aumento = (salario * percentual) / 100; // Cálculo do aumento
let novoSalario: number = salario + aumento; // Novo salário após o aumento
console.log(`Salário antes do reajuste: R$ ${salario.toFixed(2)}`);
console.log(`Percentual de aumento aplicado: ${percentual}%`);
console.log(`Valor do aumento: R$ ${aumento.toFixed(2)}`);
console.log(`Novo salário, após o aumento: R$ ${novoSalario.toFixed(2)}`); // Exibe o novo salário após o aumento

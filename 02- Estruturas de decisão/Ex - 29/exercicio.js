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
var salario = 1000; // Salário atual
var percentual;
var aumento;
if (salario <= 280) {
    percentual = 20; // Aumento de 20%
}
else if (salario > 280 && salario <= 700) {
    percentual = 15; // Aumento de 15%
}
else if (salario > 700 && salario <= 1500) {
    percentual = 10; // Aumento de 10%
}
else {
    percentual = 5; // Aumento de 5%
}
aumento = (salario * percentual) / 100; // Cálculo do aumento
var novoSalario = salario + aumento; // Novo salário após o aumento
console.log("Sal\u00E1rio antes do reajuste: R$ ".concat(salario.toFixed(2)));
console.log("Percentual de aumento aplicado: ".concat(percentual, "%"));
console.log("Valor do aumento: R$ ".concat(aumento.toFixed(2)));
console.log("Novo sal\u00E1rio, ap\u00F3s o aumento: R$ ".concat(novoSalario.toFixed(2))); // Exibe o novo salário após o aumento

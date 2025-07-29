/*
Faça um programa para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que dependem do salário bruto (conforme tabela abaixo) e 10% para o INSS e que o FGTS corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita).

O Salário Líquido corresponde ao Salário Bruto menos os descontos. O programa deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.

Desconto do IR: Salário Bruto até 900 (inclusive) - isento Salário Bruto até 1500 (inclusive) - desconto de 5% Salário Bruto até 2500 (inclusive) - desconto de 10% Salário Bruto acima de 2500 - desconto de 20%

Imprima na tela as informações, interessados conforme o exemplo abaixo. No exemplo o valor da hora é 5 e a quantidade de hora é 220.

    Salário Bruto: (5 * 220)        : R$ 1100,00
    (-) IR (5%)                     : R$   55,00
    (-) INSS ( 10%)                 : R$  110,00
    FGTS (11%)                      : R$  121,00
    Total de descontos              : R$  165,00
    Salário Liquido                 : R$  935,00
*/

let valorHora: number = 5; // Valor da hora trabalhada
let horasTrabalhadas: number = 220; // Quantidade de horas trabalhadas no mês
let salarioBruto: number = valorHora * horasTrabalhadas; // Cálculo do salário bruto
let descontoIR: number = 0; // Inicializa o desconto do IR
if (salarioBruto <= 900) {
  descontoIR = 0; // Isento
} else if (salarioBruto <= 1500) {
  descontoIR = (salarioBruto * 5) / 100; // Desconto de 5%
} else if (salarioBruto <= 2500) {
  descontoIR = (salarioBruto * 10) / 100; // Desconto de 10%
} else {
  descontoIR = (salarioBruto * 20) / 100; // Desconto de 20%
}
let descontoINSS: number = (salarioBruto * 10) / 100; // Desconto do INSS de 10%
let fgts: number = (salarioBruto * 11) / 100; // FGTS de 11% (não descontado)
let totalDescontos: number = descontoIR + descontoINSS; // Total de descontos
let salarioLiquido: number = salarioBruto - totalDescontos; // Salário líquido após descontos
console.log(
  `Salário Bruto: (R$ ${valorHora.toFixed(
    2
  )} * ${horasTrabalhadas})        : R$ ${salarioBruto.toFixed(2)}`
);
console.log(
  `(-) IR (${((descontoIR / salarioBruto) * 100).toFixed(
    2
  )}%)                     : R$ ${descontoIR.toFixed(2)}`
);
console.log(`(-) INSS (10%)                 : R$ ${descontoINSS.toFixed(2)}`);
console.log(`FGTS (11%)                      : R$ ${fgts.toFixed(2)}`);
console.log(
  `Total de descontos              : R$ ${totalDescontos.toFixed(2)}`
);
console.log(
  `Salário Líquido                 : R$ ${salarioLiquido.toFixed(2)}`
); // Exibe o salário líquido após descontos
console.log(
  `\nObservação: O FGTS não é descontado do salário, é a empresa que deposita.`
);
console.log(`\nCálculo realizado com sucesso!`); // Mensagem de sucesso

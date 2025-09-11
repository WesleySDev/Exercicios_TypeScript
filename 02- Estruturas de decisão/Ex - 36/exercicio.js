"use strict";
/*Faça um programa que peça um dado no formato dd/mm/aaaa e determine se o mesmo é um dado válido */
function validarData(data) {
    // Expressão regular para validar o formato dd/mm/aaaa
    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const match = data.match(regex);
    if (!match) {
        return false; // formato inválido
    }
    const dia = parseInt(match[1], 10);
    const mes = parseInt(match[2], 10);
    const ano = parseInt(match[3], 10);
    // Meses vão de 1 a 12
    if (mes < 1 || mes > 12)
        return false;
    // Verificar dias de acordo com o mês
    const diasNoMes = new Date(ano, mes, 0).getDate(); // Pega último dia do mês
    if (dia < 1 || dia > diasNoMes)
        return false;
    return true;
}
// Exemplos de teste
const datas = ["29/02/2024", "31/04/2023", "12/13/2022", "25/12/2025"];
datas.forEach((d) => {
    console.log(`${d} -> ${validarData(d) ? "Válida " : "Inválida "}`);
});
console.log(`\nCálculo realizado com sucesso!`); // Mensagem de sucesso
console.log(`\nObservação: A data deve estar no formato dd/mm/aaaa para ser válida.`);

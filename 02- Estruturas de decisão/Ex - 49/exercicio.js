/*Faça um Programa que peça uma data no formato dd/mm/aaaa e determine se a mesma é uma data válida.*/
var data = "29/02/2024"; // Data a ser verificada
var partesData = data.split("/");
var dia = parseInt(partesData[0], 10);
var mes = parseInt(partesData[1], 10);
var ano = parseInt(partesData[2], 10);
var ehDataValida = true;
// Verifica o ano bissexto
var ehBissexto = (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
// Verifica a validade do mês
if (mes < 1 || mes > 12) {
    ehDataValida = false;
}
else {
    // Verifica a validade do dia com base no mês
    var diasNoMes = void 0;
    if (mes === 2) {
        diasNoMes = ehBissexto ? 29 : 28;
    }
    else {
        diasNoMes = [4, 6, 9, 11].includes(mes) ? 30 : 31;
    }
    if (dia < 1 || dia > diasNoMes) {
        ehDataValida = false;
    }
}
console.log("A data ".concat(data, " \u00E9 ").concat(ehDataValida ? "válida" : "inválida", "."));

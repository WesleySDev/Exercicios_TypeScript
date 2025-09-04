/*Faça um programa que peça um dado no formato dd/mm/aaaa e determine se o mesmo é um dado válido */
function validarData(data) {
    // Expressão regular para validar o formato dd/mm/aaaa
    var regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    var match = data.match(regex);
    if (!match) {
        return false; // formato inválido
    }
    var dia = parseInt(match[1], 10);
    var mes = parseInt(match[2], 10);
    var ano = parseInt(match[3], 10);
    // Meses vão de 1 a 12
    if (mes < 1 || mes > 12)
        return false;
    // Verificar dias de acordo com o mês
    var diasNoMes = new Date(ano, mes, 0).getDate(); // Pega último dia do mês
    if (dia < 1 || dia > diasNoMes)
        return false;
    return true;
}
// Exemplos de teste
var datas = ["29/02/2024", "31/04/2023", "12/13/2022", "25/12/2025"];
datas.forEach(function (d) {
    console.log("".concat(d, " -> ").concat(validarData(d) ? "Válida " : "Inválida "));
});
console.log("\nC\u00E1lculo realizado com sucesso!"); // Mensagem de sucesso
console.log("\nObserva\u00E7\u00E3o: A data deve estar no formato dd/mm/aaaa para ser v\u00E1lida.");

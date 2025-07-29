/*
Faça um Programa que leia um número e exiba o dia correspondente da semana.
(1-Domingo, 2- Segunda, etc.), se digitar outro valor deverá aparecer valor inválido.
*/
var dia = 3; // Número do dia da semana (1 a 7)
var mensagem;
switch (dia) {
    case 1:
        mensagem = "Domingo";
        break;
    case 2:
        mensagem = "Segunda-feira";
        break;
    case 3:
        mensagem = "Terça-feira";
        break;
    case 4:
        mensagem = "Quarta-feira";
        break;
    case 5:
        mensagem = "Quinta-feira";
        break;
    case 6:
        mensagem = "Sexta-feira";
        break;
    case 7:
        mensagem = "Sábado";
        break;
    default:
        mensagem = "Valor inválido"; // Caso o número não esteja entre 1 e 7
}
console.log("Dia da semana: ".concat(dia));
console.log("Mensagem: ".concat(mensagem)); // Exibe a mensagem correspondente ao dia da semana
console.log("\nC\u00E1lculo realizado com sucesso!"); // Mensagem de sucesso
console.log("\nObserva\u00E7\u00E3o: O n\u00FAmero deve estar entre 1 e 7 para ser v\u00E1lido."); // Observação sobre o intervalo válido

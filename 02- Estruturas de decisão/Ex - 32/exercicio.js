/*
Faça um programa que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a sua média.

A atribuição de conceitos obedece à tabela abaixo: Média de Aproveitamento Conceito Entre 9,0 e 10,0 A Entre 7,5 e 9,0 B Entre 6,0 e 7,5 C Entre 4,0 e 6,0 D Entre 4,0 e zero E

O algoritmo deve mostrar na tela as notas, a mídia, o conceito correspondente e a mensagem “APROVADO” se o conceito para A, B ou C ou “REPROVADO” se o conceito para D ou E.
*/
var nota1 = 8.5; // Primeira nota parcial
var nota2 = 6.0; // Segunda nota parcial
var media = (nota1 + nota2) / 2; // Cálculo da média
var conceito;
if (media >= 9.0 && media <= 10.0) {
    conceito = "A"; // Conceito A
}
else if (media >= 7.5 && media < 9.0) {
    conceito = "B"; // Conceito B
}
else if (media >= 6.0 && media < 7.5) {
    conceito = "C"; // Conceito C
}
else if (media >= 4.0 && media < 6.0) {
    conceito = "D"; // Conceito D
}
else {
    conceito = "E"; // Conceito E
}
var status;
if (conceito === "A" || conceito === "B" || conceito === "C") {
    status = "APROVADO"; // Aprovado
}
else {
    status = "REPROVADO"; // Reprovado
}
console.log("Nota 1: ".concat(nota1.toFixed(2))); // Exibe a primeira nota
console.log("Nota 2: ".concat(nota2.toFixed(2))); // Exibe a segunda nota
console.log("M\u00E9dia: ".concat(media.toFixed(2))); // Exibe a média
console.log("Conceito: ".concat(conceito)); // Exibe o conceito correspondente
console.log("Status: ".concat(status)); // Exibe o status de aprovação ou reprovação
console.log("\nC\u00E1lculo realizado com sucesso!"); // Mensagem de sucesso
console.log("\nObserva\u00E7\u00E3o: As notas devem estar entre 0 e 10 para serem v\u00E1lidas."); // Observação sobre o intervalo válido
console.log("\nConceito: ".concat(conceito, " - ").concat(status)); // Exibe o conceito e o status
console.log("\nM\u00E9dia: ".concat(media.toFixed(2))); // Exibe a média formatada
console.log("\nNotas: Nota 1 = ".concat(nota1.toFixed(2), ", Nota 2 = ").concat(nota2.toFixed(2))); // Exibe as notas formatadas
console.log("\nObrigado por utilizar nosso sistema!"); // Mensagem de agradecimento

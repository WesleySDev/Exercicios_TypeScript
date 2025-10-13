/*
Faça um programa que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a sua média.

A atribuição de conceitos obedece à tabela abaixo: Média de Aproveitamento Conceito Entre 9,0 e 10,0 A Entre 7,5 e 9,0 B Entre 6,0 e 7,5 C Entre 4,0 e 6,0 D Entre 4,0 e zero E

O algoritmo deve mostrar na tela as notas, a mídia, o conceito correspondente e a mensagem “APROVADO” se o conceito para A, B ou C ou “REPROVADO” se o conceito para D ou E.
*/

let nota1: number = 8.5; // Primeira nota parcial
let nota2: number = 6.0; // Segunda nota parcial
let media: number = (nota1 + nota2) / 2; // Cálculo da média
let conceito: string;
if (media >= 9.0 && media <= 10.0) {
  conceito = "A"; // Conceito A
} else if (media >= 7.5 && media < 9.0) {
  conceito = "B"; // Conceito B
} else if (media >= 6.0 && media < 7.5) {
  conceito = "C"; // Conceito C
} else if (media >= 4.0 && media < 6.0) {
  conceito = "D"; // Conceito D
} else {
  conceito = "E"; // Conceito E
}
let status: string;
if (conceito === "A" || conceito === "B" || conceito === "C") {
  status = "APROVADO"; // Aprovado para conceitos A, B ou C
} else {
  status = "REPROVADO"; // Reprovado para conceitos D ou E
}
console.log(`Nota 1: ${nota1.toFixed(2)}`); // Exibe a primeira nota
console.log(`Nota 2: ${nota2.toFixed(2)}`); // Exibe a segunda nota
console.log(`Média: ${media.toFixed(2)}`); // Exibe a média
console.log(`Conceito: ${conceito}`); // Exibe o conceito correspondente
console.log(`Status: ${status}`); // Exibe o status de aprovação ou reprovação
console.log(`\nCálculo realizado com sucesso!`); // Mensagem de sucesso
console.log(
  `\nObservação: As notas devem estar entre 0 e 10 para serem válidas.`
); // Observação sobre o intervalo válido
console.log(
  `\nConceitos: A (9.0 a 10.0), B (7.5 a 9.0), C (6.0 a 7.5), D (4.0 a 6.0), E (0 a 4.0)`
); // Explicação dos conceitos
console.log(`\nStatus: Aprovado (A, B, C) ou Reprovado (D, E)`); // Explicação do status de aprovação
console.log(`\nObrigado por utilizar nosso sistema!`); // Mensagem de agradecimento

/*
Faça um programa para a leitura de duas notas parciais de um aluno.
 O programa deve calcular a média alcançada por aluno e apresentar:
  A mensagem "Aprovado", se a média alcançada por maior ou igual a sete;
  A mensagem "Reprovado", se a mídia for menor do que sete; A mensagem
  "Aprovado com Distinção", se a média for igual a dez.
*/
var nota1 = 8.5;
var nota2 = 9.5;
var media = (nota1 + nota2) / 2; // Calcula a média das notas
var resultado;
if (media >= 7 && media < 10) {
    resultado = "Aprovado"; // Média maior ou igual a 7 e menor que 10
}
else if (media === 10) {
    resultado = "Aprovado com Distinção"; // Média igual a 10
}
else {
    resultado = "Reprovado"; // Média menor que 7
}
console.log("Nota 1: ".concat(nota1));
console.log("Nota 2: ".concat(nota2));
console.log("M\u00E9dia: ".concat(media.toFixed(2))); // Exibe a média com duas casas decimais
console.log("Resultado: ".concat(resultado));

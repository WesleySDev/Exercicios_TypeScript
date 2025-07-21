/*
Tendo como dado de entrada a altura (h) de uma pessoa, constrói um algoritmo que calcula seu peso ideal,
utilizando as seguintes fórmulas: Para homens: (72,7 h) - 58 Para mulheres: (62,1 h) - 44,7
*/
var altura = 1.75; // Altura em metros
var pesoIdealHomem = 72.7 * altura - 58;
var pesoIdealMulher = 62.1 * altura - 44.7;
console.log("O peso ideal para um homem com altura de ".concat(altura, "m \u00E9 ").concat(pesoIdealHomem.toFixed(2), " kg."));
console.log("O peso ideal para uma mulher com altura de ".concat(altura, "m \u00E9 ").concat(pesoIdealMulher.toFixed(2), " kg."));

/*
Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcula seu peso ideal,
 usando a seguinte fórmula: (72.7*altura) - 58
*/
var altura = 1.75;
var pesoIdeal = 72.7 * altura - 58;
console.log("O peso ideal para uma altura de ".concat(altura, "m \u00E9 ").concat(pesoIdeal.toFixed(2), " kg."));

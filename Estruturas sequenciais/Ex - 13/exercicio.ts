/*
Tendo como dado de entrada a altura (h) de uma pessoa, constrói um algoritmo que calcula seu peso ideal, 
utilizando as seguintes fórmulas: Para homens: (72,7 h) - 58 Para mulheres: (62,1 h) - 44,7
*/

let altura: number = 1.75; // Altura em metros
let pesoIdealHomem: number = 72.7 * altura - 58;
let pesoIdealMulher: number = 62.1 * altura - 44.7;
console.log(
  `O peso ideal para um homem com altura de ${altura}m é ${pesoIdealHomem.toFixed(
    2
  )} kg.`
);
console.log(
  `O peso ideal para uma mulher com altura de ${altura}m é ${pesoIdealMulher.toFixed(
    2
  )} kg.`
);

/* 
Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcula seu peso ideal,
 usando a seguinte fórmula: (72.7*altura) - 58
*/

let altura: number = 1.75;
let pesoIdeal: number = 72.7 * altura - 58;
console.log(
  `O peso ideal para uma altura de ${altura}m é ${pesoIdeal.toFixed(2)} kg.`
);

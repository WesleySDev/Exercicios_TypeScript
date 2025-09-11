/*Faça um Programa que peça um número e informe se o número é inteiro ou decimal. Dica: utilize uma função de arredondamento. */

let num: number = 5.5;
if (num == Math.round(num)) {
  // Se o número for igual ao arredondamento do número, ele é inteiro
  console.log(num + " O número é inteiro");
} else {
  console.log(num + " O número é decimal");
}

/*Faça um Programa que peça um número e informe se o número é inteiro ou decimal. Dica: utilize uma função de arredondamento. */
var num = 5.5;
if (num == Math.round(num)) {
    console.log(num + " O número é inteiro");
}
else {
    console.log(num + " O número é decimal");
}

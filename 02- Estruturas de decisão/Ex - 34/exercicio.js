"use strict";
/*Faça um programa que calcula as raízes de uma descoberta de segundo grau, na forma ax² + bx + c.

O programa deverá pedir os valores de a, para fazer as consistências, informando ao usuário nas seguintes situações:

Se o usuário informar o valor de A igual a zero, a equação não é do segundo
    grau e o programa não deve fazer pedir os demais valores,
    sendo encerrado;
Se o delta calculado for negativo, a equação não possui raízes reais.
    Informe ao usuário e encerre o programa;
Se o delta calculado for igual a zero a equação possui apenas uma raiz
    real; informe-a ao usuário;
Se o delta for positivo, a equação possui duas raiz reais;
    informe-as ao usuário; */
let a = 1; // Coeficiente a
let b = -3; // Coeficiente b
let c = 2; // Coeficiente c
if (a === 0) {
    console.log("A equação não é do segundo grau.");
}
else {
    let delta = b * b - 4 * a * c; // Cálculo do delta
    if (delta < 0) {
        console.log("A equação não possui raízes reais.");
    }
    else if (delta === 0) {
        let raiz = -b / (2 * a); // Cálculo da raiz única
        console.log(`A equação possui uma raiz real: ${raiz.toFixed(2)}`);
    }
    else {
        let raiz1 = (-b + Math.sqrt(delta)) / (2 * a); // Cálculo da primeira raiz
        let raiz2 = (-b - Math.sqrt(delta)) / (2 * a); // Cálculo da segunda raiz
        console.log(`A equação possui duas raízes reais: ${raiz1.toFixed(2)} e ${raiz2.toFixed(2)}`);
    }
}
console.log(`\nCálculo realizado com sucesso!`); // Mensagem de sucesso
console.log(`\nObservação: O coeficiente 'a' deve ser diferente de zero.`); // Observação sobre o coeficiente 'a'
console.log(`\nObrigado por utilizar nosso sistema!`); // Mensagem de agradecimento

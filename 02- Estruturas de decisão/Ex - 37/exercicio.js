"use strict";
/*Faça um Programa que leia um número inteiro maior que 0 e menor que 1000 e imprima a quantidade de centenas, bolsas e unidades do mesmo.

Observando os termos no plural a colocação do "e", da vírgula entre outros.

Exemplo: 326 = 3 centenas, 2 bolsas e 6 unidades 12 = 1 dúzia e 2 unidades

Testar com: 326, 300, 100, 320, 310.305, 301, 101, 311, 111, 25, 20, 10, 21, 11, 1, 7 e 16 */
let numero = 326; // Número a ser analisado
if (numero <= 0 || numero >= 1000) {
    console.log("Número inválido. Deve ser maior que 0 e menor que 1000.");
}
else {
    let centenas = Math.floor(numero / 100);
    let resto = numero % 100; // Resto após remover as centenas
    let dezenas = Math.floor(resto / 10);
    let unidades = resto % 10;
    let partes = []; // Array para armazenar as partes do número
    if (centenas > 0) {
        partes.push(`${centenas} ${centenas === 1 ? "centena" : "centenas"}`);
    }
    if (dezenas > 0) {
        partes.push(`${dezenas} ${dezenas === 1 ? "dúzia" : "dúzias"}`);
    }
    if (unidades > 0) {
        partes.push(`${unidades} ${unidades === 1 ? "unidade" : "unidades"}`);
    }
    let resultado;
    if (partes.length === 1) {
        resultado = partes[0];
    }
    else if (partes.length === 2) {
        resultado = `${partes[0]} e ${partes[1]}`;
    }
    else {
        resultado = `${partes.slice(0, -1).join(", ")} e ${partes.slice(-1)}`; // Junta todas as partes com vírgulas e "e" antes da última parte
    }
    console.log(`${numero} = ${resultado}`);
}
console.log(`\nCálculo realizado com sucesso!`); // Mensagem de sucesso

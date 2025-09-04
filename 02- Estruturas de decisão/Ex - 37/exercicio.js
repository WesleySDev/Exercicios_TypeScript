/*Faça um Programa que leia um número inteiro maior que 0 e menor que 1000 e imprima a quantidade de centenas, bolsas e unidades do mesmo.

Observando os termos no plural a colocação do "e", da vírgula entre outros.

Exemplo: 326 = 3 centenas, 2 bolsas e 6 unidades 12 = 1 dúzia e 2 unidades

Testar com: 326, 300, 100, 320, 310.305, 301, 101, 311, 111, 25, 20, 10, 21, 11, 1, 7 e 16 */
var numero = 326; // Número a ser analisado
if (numero <= 0 || numero >= 1000) {
    console.log("Número inválido. Deve ser maior que 0 e menor que 1000.");
}
else {
    var centenas = Math.floor(numero / 100);
    var resto = numero % 100;
    var dezenas = Math.floor(resto / 10);
    var unidades = resto % 10;
    var partes = [];
    if (centenas > 0) {
        partes.push("".concat(centenas, " ").concat(centenas === 1 ? "centena" : "centenas"));
    }
    if (dezenas > 0) {
        partes.push("".concat(dezenas, " ").concat(dezenas === 1 ? "dúzia" : "dúzias"));
    }
    if (unidades > 0) {
        partes.push("".concat(unidades, " ").concat(unidades === 1 ? "unidade" : "unidades"));
    }
    var resultado = void 0;
    if (partes.length === 1) {
        resultado = partes[0];
    }
    else if (partes.length === 2) {
        resultado = "".concat(partes[0], " e ").concat(partes[1]);
    }
    else {
        resultado = "".concat(partes.slice(0, -1).join(", "), " e ").concat(partes.slice(-1));
    }
    console.log("".concat(numero, " = ").concat(resultado));
}
console.log("\nC\u00E1lculo realizado com sucesso!"); // Mensagem de sucesso

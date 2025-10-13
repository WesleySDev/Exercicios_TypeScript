/*Tabuada de um Número

Descrição: Peça um número inteiro e exiba a tabuada desse número de 1 a 10.

Exemplo de Entrada/Saída:

Digite um número: 7
Tabuada do 7:
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
...
7 x 10 = 70

 */
var numero = 7; // Número para o qual a tabuada será exibida
console.log("Tabuada do ".concat(numero, ":"));
for (var i = 1; i <= 10; i++) {
    console.log("".concat(numero, " x ").concat(i, " = ").concat(numero * i));
}
console.log("\nTabuada exibida com sucesso!"); // Mensagem de sucesso

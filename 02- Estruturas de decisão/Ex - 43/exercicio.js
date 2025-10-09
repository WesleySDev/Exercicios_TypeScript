/*Calculadora Simples

Descrição: Leia dois números e um operador matemático (+, -, *, /). Realize a operação indicada e mostre o resultado.

Exemplo de Entrada/Saída:

Digite o primeiro número: 10
Digite o segundo número: 5
Digite o operador (+, -, *, /): *
Resultado: 50 */
var num1 = 10; // Primeiro número
var num2 = 5; // Segundo número
var operador = "*"; // Operador matemático
var resultado; // Variável para armazenar o resultado
switch (operador) {
    case "+":
        resultado = num1 + num2; // Adição
        break;
    case "-":
        resultado = num1 - num2; // Subtração
        break;
    case "*":
        resultado = num1 * num2; // Multiplicação
        break;
    case "/":
        if (num2 !== 0) {
            resultado = num1 / num2; // Divisão
        }
        else {
            console.log("Erro: Divisão por zero não é permitida.");
            return;
        }
        break;
    default:
        console.log("Erro: Operador inválido.");
        return;
}
console.log("Resultado: ".concat(resultado));

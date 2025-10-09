/*Calculadora Simples

Descrição: Leia dois números e um operador matemático (+, -, *, /). Realize a operação indicada e mostre o resultado.

Exemplo de Entrada/Saída:

Digite o primeiro número: 10
Digite o segundo número: 5
Digite o operador (+, -, *, /): *
Resultado: 50 */

let num1: number = 10; // Primeiro número
let num2: number = 5; // Segundo número
let operador: string = "*"; // Operador matemático
let resultado: number; // Variável para armazenar o resultado
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
    } else {
      console.log("Erro: Divisão por zero não é permitida.");
      return;
    }
    break;
  default:
    console.log("Erro: Operador inválido.");
    return;
}

console.log(`Resultado: ${resultado}`);

console.log(`\nCálculo realizado com sucesso!`); // Mensagem de sucesso

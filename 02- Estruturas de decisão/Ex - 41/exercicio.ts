/*Faça um Programa que leia 2 números e em seguida pergunte ao usuário qual operação ele deseja realizar.

O resultado da operação deve ser acompanhado de uma frase que diga se o número é: par ou ímpar; positivo ou negativo; inteiro ou decimal. */

let num1: number = 10;

let num2: number = 5;

let operacao: string = "*";

if (operacao == "+") {
  console.log(num1 + num2);
} else if (operacao == "-") {
  console.log(num1 - num2);
} else if (operacao == "*") {
  console.log(num1 * num2);
} else if (operacao == "/") {
  console.log(num1 / num2);
} else {
  console.log("Operação inválida");
}

// Verificando se os números são par ou ímpar
if (num1 % 2 == 0) {
  console.log(num1 + " é par");
} else {
  console.log(num1 + " é ímpar");
}

// Verificando se os números são positivos ou negativos
if (num1 > 0) {
  console.log(num1 + " é positivo");
} else {
  console.log(num1 + " é negativo");
}

// Verificando se os números são inteiros ou decimais
if (num1 == Math.round(num1)) {
  // Verificando se o número é inteiro

  console.log(num1 + " é inteiro");
} else {
  console.log(num1 + " é decimal");
}

// Verificando se os números são positivos ou negativos
if (num2 > 0) {
  console.log(num2 + " é positivo");
} else {
  console.log(num2 + " é negativo");
}

// Verificando se os números são inteiros ou decimais
if (num2 == Math.round(num2)) {
  // Verificando se o número é inteiro

  console.log(num2 + " é inteiro");
} else {
  console.log(num2 + " é decimal");
}

// Verificando se os números são par ou ímpar
if (num2 % 2 == 0) {
  console.log(num2 + " é par");
} else {
  console.log(num2 + " é ímpar");
}

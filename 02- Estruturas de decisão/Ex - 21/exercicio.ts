/*
Faça um Programa que verifique se uma letra digitada é "F" ou "M".
 Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.
*/

let letra: string = "F"; // Letra digitada pelo usuário
let resultado: string;
if (letra === "F") {
  resultado = "Feminino";
} else if (letra === "M") {
  resultado = "Masculino";
} else {
  resultado = "Sexo Inválido";
}
console.log(`A letra digitada é: ${letra}`);
console.log(`Resultado: ${resultado}`);

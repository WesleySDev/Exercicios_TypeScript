/*
Faça um Programa que verifique se uma letra digitada é vogal ou consoante.
*/

let letra: string = "a"; // Letra digitada pelo usuário
let resultado: string;
if (["a", "e", "i", "o", "u"].includes(letra.toLowerCase())) {
  // Verifica se a letra é uma vogal
  // A função toLowerCase() é usada para garantir que a verificação seja feita de forma case-insensitive
  resultado = "Vogal";
} else {
  resultado = "Consoante";
}
console.log(`A letra digitada é: ${letra}`);
console.log(`Resultado: ${resultado}`);

/*Faça um programa que parte os 3 lados de um triângulo.
 O programa deve informar se os valores podem ser um triângulo.
  Indique, caso os lados formem um triângulo, se o mesmo for: equilátero, isósceles ou escaleno.
Dicas: Três lados formam um triângulo quando a soma de quaisquer dois lados para maior que o terceiro; 
Triângulo Equilátero: três lados iguais; Triângulo Isósceles: quaisquer dois lados iguais; Triângulo Escaleno: três lados diferentes;*/

let ladoA: number = 5; // Lado A do triângulo
let ladoB: number = 5; // Lado B do triângulo
let ladoC: number = 5; // Lado C do triângulo
let tipoTriangulo: string;

// Verifica se os lados podem formar um triângulo
if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
  // Determina o tipo de triângulo
  if (ladoA === ladoB && ladoB === ladoC) {
    tipoTriangulo = "Equilátero"; // Todos os lados são iguais
  } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    tipoTriangulo = "Isósceles"; // Dois lados são iguais
  } else {
    tipoTriangulo = "Escaleno"; // Todos os lados são diferentes
  }
  console.log(`Os lados formam um triângulo do tipo: ${tipoTriangulo}`);
} else {
  console.log("Os lados não formam um triângulo.");
}

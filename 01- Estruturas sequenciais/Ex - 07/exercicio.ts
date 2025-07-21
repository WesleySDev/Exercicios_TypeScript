/*
Faça um programa que calcula a área de um quadrado, em seguida mostre o dobro desta área para o usuário.
*/

let lado: number = 4;
let areaQuadrado: number = Math.pow(lado, 2);
let dobroArea: number = areaQuadrado * 2;
console.log(
  `A área do quadrado com lado ${lado} é ${areaQuadrado}. O dobro desta área é ${dobroArea}.`
);

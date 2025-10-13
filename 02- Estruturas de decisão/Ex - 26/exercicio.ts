/*
Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar, 
sabendo que a decisão é sempre pelo mais barata.
*/

let precoProduto1: number = 50.0;
let precoProduto2: number = 30.0;
let precoProduto3: number = 40.0;
let produtoMaisBarato: string;
if (precoProduto1 < precoProduto2 && precoProduto1 < precoProduto3) {
  produtoMaisBarato = "Produto 1"; // Se o primeiro produto é o mais barato
} else if (precoProduto2 < precoProduto1 && precoProduto2 < precoProduto3) {
  produtoMaisBarato = "Produto 2"; // Se o segundo produto é o mais barato
} else {
  produtoMaisBarato = "Produto 3"; // Se o terceiro produto é o mais barato
}
console.log(`Preço do Produto 1: R$ ${precoProduto1.toFixed(2)}`);
console.log(`Preço do Produto 2: R$ ${precoProduto2.toFixed(2)}`);
console.log(`Preço do Produto 3: R$ ${precoProduto3.toFixed(2)}`);
console.log(`Produto mais barato: ${produtoMaisBarato}`); // Exibe o nome do produto mais barato
console.log(
  `Preço do ${produtoMaisBarato}: R$ ${Math.min(
    precoProduto1,
    precoProduto2,
    precoProduto3
  ).toFixed(2)}`
); // Exibe o preço do produto mais barato

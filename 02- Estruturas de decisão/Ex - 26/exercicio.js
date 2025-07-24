/*
Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar,
sabendo que a decisão é sempre pelo mais barata.
*/
var precoProduto1 = 50.0;
var precoProduto2 = 30.0;
var precoProduto3 = 40.0;
var produtoMaisBarato;
if (precoProduto1 < precoProduto2 && precoProduto1 < precoProduto3) {
    produtoMaisBarato = "Produto 1"; // Se o primeiro produto é o mais barato
}
else if (precoProduto2 < precoProduto1 && precoProduto2 < precoProduto3) {
    produtoMaisBarato = "Produto 2"; // Se o segundo produto é o mais barato
}
else {
    produtoMaisBarato = "Produto 3"; // Se o terceiro produto é o mais barato
}
console.log("Pre\u00E7o do Produto 1: R$ ".concat(precoProduto1.toFixed(2)));
console.log("Pre\u00E7o do Produto 2: R$ ".concat(precoProduto2.toFixed(2)));
console.log("Pre\u00E7o do Produto 3: R$ ".concat(precoProduto3.toFixed(2)));
console.log("Produto mais barato: ".concat(produtoMaisBarato)); // Exibe o nome do produto mais barato
console.log("Pre\u00E7o do ".concat(produtoMaisBarato, ": R$ ").concat(Math.min(precoProduto1, precoProduto2, precoProduto3).toFixed(2))); // Exibe o preço do produto mais barato

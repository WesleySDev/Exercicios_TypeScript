/*
Faça um Programa que verifique se uma letra digitada é "F" ou "M".
 Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.
*/
var letra = "F"; // Letra digitada pelo usuário
var resultado;
if (letra === "F") {
    resultado = "Feminino";
}
else if (letra === "M") {
    resultado = "Masculino";
}
else {
    resultado = "Sexo Inválido";
}
console.log("A letra digitada \u00E9: ".concat(letra));
console.log("Resultado: ".concat(resultado));

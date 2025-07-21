/*
Faça um programa que parte a temperatura em graus Celsius, transforma e mostra em graus Farenheit.
*/
var temperaturaCelsius = 37;
var temperaturaFahrenheit = (temperaturaCelsius * 9) / 5 + 32;
console.log("A temperatura de ".concat(temperaturaCelsius, "\u00B0C \u00E9 equivalente a ").concat(temperaturaFahrenheit.toFixed(2), "\u00B0F."));

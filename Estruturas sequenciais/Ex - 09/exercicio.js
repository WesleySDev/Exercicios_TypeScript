/*
Faça um programa que parte a temperatura em graus Farenheit, transforma e mostra a temperatura em graus Celsius. C=(5*(F-32)/9).
*/
var temperaturaFahrenheit = 100;
var temperaturaCelsius = (5 * (temperaturaFahrenheit - 32)) / 9;
console.log("A temperatura de ".concat(temperaturaFahrenheit, "\u00B0F \u00E9 equivalente a ").concat(temperaturaCelsius.toFixed(2), "\u00B0C."));

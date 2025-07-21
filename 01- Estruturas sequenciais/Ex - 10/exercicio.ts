/* 
Faça um programa que parte a temperatura em graus Celsius, transforma e mostra em graus Farenheit.
*/

let temperaturaCelsius: number = 37;
let temperaturaFahrenheit: number = (temperaturaCelsius * 9) / 5 + 32;
console.log(
  `A temperatura de ${temperaturaCelsius}°C é equivalente a ${temperaturaFahrenheit.toFixed(
    2
  )}°F.`
);

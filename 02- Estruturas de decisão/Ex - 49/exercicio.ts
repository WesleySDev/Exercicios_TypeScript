/*Faça um Programa que peça uma data no formato dd/mm/aaaa e determine se a mesma é uma data válida.*/
let data: string = "29/02/2024"; // Data a ser verificada
let partesData: string[] = data.split("/");
let dia: number = parseInt(partesData[0], 10);
let mes: number = parseInt(partesData[1], 10);
let ano: number = parseInt(partesData[2], 10);
let ehDataValida: boolean = true;

// Verifica o ano bissexto
let ehBissexto: boolean = (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
// Verifica a validade do mês
if (mes < 1 || mes > 12) {
  ehDataValida = false;
} else {
  // Verifica a validade do dia com base no mês
  let diasNoMes: number;
  if (mes === 2) {
    diasNoMes = ehBissexto ? 29 : 28;
  } else {
    diasNoMes = [4, 6, 9, 11].includes(mes) ? 30 : 31;
  }
  if (dia < 1 || dia > diasNoMes) {
    ehDataValida = false;
  }
}
console.log(`A data ${data} é ${ehDataValida ? "válida" : "inválida"}.`);

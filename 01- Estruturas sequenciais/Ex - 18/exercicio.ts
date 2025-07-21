/*
Faça um programa que peça o tamanho de um arquivo para download (em MB)
 e a velocidade de um link de Internet (em Mbps), calcule e informe o tempo 
 aproximado de download do arquivo usando este link (em minutos).
*/

let tamanhoArquivoMB: number = 500;
let velocidadeLinkMbps: number = 10;
let tamanhoArquivoBits: number = tamanhoArquivoMB * 8 * 1024 * 1024; // Convertendo MB para bits
let velocidadeLinkBps: number = velocidadeLinkMbps * 1024 * 1024; // Convertendo Mbps para bps
let tempoDownloadSegundos: number = tamanhoArquivoBits / velocidadeLinkBps;
let tempoDownloadMinutos: number = tempoDownloadSegundos / 60; // Convertendo segundos para minutos
console.log(`Tamanho do arquivo: ${tamanhoArquivoMB} MB`);
console.log(`Velocidade do link: ${velocidadeLinkMbps} Mbps`);
console.log(
  `Tempo aproximado de download: ${tempoDownloadMinutos.toFixed(2)} minutos`
);

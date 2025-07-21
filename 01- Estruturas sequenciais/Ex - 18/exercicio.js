/*
Faça um programa que peça o tamanho de um arquivo para download (em MB)
 e a velocidade de um link de Internet (em Mbps), calcule e informe o tempo
 aproximado de download do arquivo usando este link (em minutos).
*/
var tamanhoArquivoMB = 500;
var velocidadeLinkMbps = 10;
var tamanhoArquivoBits = tamanhoArquivoMB * 8 * 1024 * 1024; // Convertendo MB para bits
var velocidadeLinkBps = velocidadeLinkMbps * 1024 * 1024; // Convertendo Mbps para bps
var tempoDownloadSegundos = tamanhoArquivoBits / velocidadeLinkBps;
var tempoDownloadMinutos = tempoDownloadSegundos / 60; // Convertendo segundos para minutos
console.log("Tamanho do arquivo: ".concat(tamanhoArquivoMB, " MB"));
console.log("Velocidade do link: ".concat(velocidadeLinkMbps, " Mbps"));
console.log("Tempo aproximado de download: ".concat(tempoDownloadMinutos.toFixed(2), " minutos"));

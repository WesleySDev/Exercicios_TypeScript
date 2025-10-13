"use strict";
/*
Faça um programa que peça o tamanho de um arquivo para download (em MB)
 e a velocidade de um link de Internet (em Mbps), calcule e informe o tempo
 aproximado de download do arquivo usando este link (em minutos).
*/
let tamanhoArquivoMB = 500;
let velocidadeLinkMbps = 10;
let tamanhoArquivoBits = tamanhoArquivoMB * 8 * 1024 * 1024; // Convertendo MB para bits
let velocidadeLinkBps = velocidadeLinkMbps * 1024 * 1024; // Convertendo Mbps para bps
let tempoDownloadSegundos = tamanhoArquivoBits / velocidadeLinkBps;
let tempoDownloadMinutos = tempoDownloadSegundos / 60; // Convertendo segundos para minutos
console.log(`Tamanho do arquivo: ${tamanhoArquivoMB} MB`);
console.log(`Velocidade do link: ${velocidadeLinkMbps} Mbps`);
console.log(`Tempo aproximado de download: ${tempoDownloadMinutos.toFixed(2)} minutos`);

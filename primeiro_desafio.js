/*Faça um programa para calcular o valor de uma viagem

com três variaveis sendo elas;

1 preço do combustivel; 
2 Gasto medio de combustível pelo carro por KM;
3 distancia em km da viagem;

Imprima no console o valor gasto que será gasto de combustível para realizar a viagem.
*/


const precoCombustivel = 5.79;
const kmPorLitro = 12;
const distanciaEmKm = 1580;

const litrosConsumidos = distanciaEmKm / kmPorLitro;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));
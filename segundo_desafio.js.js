/* Faça um programa para calcular o valor de uma viagem 
 Você tera 5 variaveis . Sendo elas:
 
 1 - Preço do etanol;
 2 - Preço da gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto meédio de combustível do carro por km;
 5 - Distancia por km de viagem;

   Imprima no console o valor que será gasto para realizar esta viagem.
 
 */
   const precoEtanol = 5.79;
   const precoGasolina = 6.66;
   const kmPorLitro = 10
   const distanciaEmKm = 100
   const tipoCombustivel = 'Etanol'
   
   const litrosConsumidos = distanciaEmKm / kmPorLitro;

   if (tipoCombustivel === "Etanol") { 
     const valorGasto = litrosConsumidos * precoEtanol;
     console.log(valorGasto.toFixed(2));

   } else { 
     const valorGasto = litrosConsumidos * precoGasolina;
     console.log(valorGasto.toFixed(2));

   }

   const valorGasto = litrosConsumidos * precoEtanol;
   
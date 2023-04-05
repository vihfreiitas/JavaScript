/* O Imc - indice de massa corporal é um criterio da organização mundial de saúde 
para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela a baixo.

IMC em adultos condições: 
- Abaixo de 18.5 abaixo do peso;
- Entre 18.5 e 25 peso normal;
- Entre 25 e 30 acima do peso;
- Entre 30 e 40 obeso;
- Acima de 40 obesidade grave;


*/

const peso = 100;
const altura = 1.80;
const imc = peso / Math.pow(altura, 2);

console.log(imc);

if (imc < 18.5){
    const imc = peso / (altura * altura);
    console.log('Abaixo do peso');

} else if (imc >= 18.5 && imc <= 25){
    console.log('Peso normal');

} else if (imc >= 25 && imc <= 30){
    console.log('Acima do peso');

} else if (imc >= 30 && imc <= 40){
    console.log('Obeso');

} else if (imc > 40){
    console.log('Obesidade grave');
}
   



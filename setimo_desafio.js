/* Elabore um algoritmo que calcule o que deve pago por um produto, considerando o preço normal da etiqueta e a escolha de forma de pagamento.

1- Á vista Débito, receba desconto de 10%;
2- Á vista no dinheiro ou pix, receba 15% de desconto;
3- Em duas Vezes, preço normal de etiqueta sem juros; 
4- Acima de duas vezes, preço normal de es[tiqueta mais juros de 10%;
*/
function aplicarDesconto(valor, desconto) {
return (valor - (valor * (desconto / 100)));

}
function aplicarJuros(valor, juros) {
return (valor + (valor * (juros / 100)));
}
const preçoProduto = 200;

const formaDePagamento = 4;


if (formaDePagamento === 1){
    console.log(aplicarDesconto(preçoProduto, 10 ));
} else if (formaDePagamento === 2){
    console.log(aplicarDesconto(preçoProduto, 15));
} else if (formaDePagamento === 3){
    console.log(preçoProduto);
} else {
    console.log(aplicarJuros(preçoProduto, 10));
}
    
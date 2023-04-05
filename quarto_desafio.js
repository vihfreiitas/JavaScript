/* 
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal da 
etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler a condição de pagamento escolhida e efetuar o calculo adequado. 

Código condição de pagamento:
1 - A vista Débito, receba 10% de desconto;
2 - A vista do dinheiro ou Pix, recebe 15% de desconto;
3 - Em duas vezes, preço normal sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

*/

const preçoProduto = 200;

const formaDePagamento = 4;


if (formaDePagamento === 1){
    console.log(preçoProduto - (preçoProduto * 0.1));
} else if (formaDePagamento === 2){
    console.log(preçoProduto - (preçoProduto * 0.15));
} else if (formaDePagamento === 3){
    console.log(preçoProduto);
} else {
    console.log(preçoProduto + (preçoProduto * 0.1));
}
    

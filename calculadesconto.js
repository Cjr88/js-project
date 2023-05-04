
function aplicaDesconto(valor, desconto){
    return (valor - (valor * (desconto / 100)));
}
function aplicaJuros(valor, juros){
    return (valor + (valor * (juros / 100)));
}

const precoEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1){
    console.log(aplicaDesconto(precoEtiqueta, 10));
} else if (formaDePagamento === 2){
    console.log(aplicaDesconto (precoEtiqueta, 15));
} else if (formaDePagamento === 3){
    console.log(precoEtiqueta);
}else {
    console.log(aplicaJuros(precoEtiqueta, 10));
}
    // 200 * 0.10
    // 10 / 100

// function incrementaJuros(valor, percentualJuros){
//     const valorDoAcrescimo = (percentualJuros / 100) * valor;
//     return valor + valorDoAcrescimo;
// }   
// console.log(incrementaJuros(100,10))

function calcularMedia(nota1, nota2) {
    const media = (nota1 + nota2) / 2;
}

console.log(calcularMedia(5, 5));
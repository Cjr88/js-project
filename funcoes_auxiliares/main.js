const { gets, print } = require ('./funcoes-auxiliares')

const quandtidadeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quandtidadeAlunos; i++) {
    const numeroSorteado = gets();
    if(numeroSorteado > maiorValorEncontrado){
        maiorValorEncontrado = numeroSorteado
    }
    
}
print(maiorValorEncontrado);
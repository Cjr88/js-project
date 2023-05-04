const entradas = [ 5, 50, 10, 98, 235, 51, 11, 98, 22];
let i = 0;

function gets(){
    const valor = entradas[i];
    i++;
    return valor;
}
function print(texto){
    console.log(texto)
}
module.exports = {gets, print};
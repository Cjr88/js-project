class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this. marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    
    calcularGatoViagem(distanciaEmKm, precoDoCombustivel){
        return distanciaEmKm * this.gastoMedioPorKm * precoDoCombustivel;
    }
}
const duster = new Carro('Renault', 'Azul', 1/10)
console.log(duster.calcularGatoViagem(450, 5))
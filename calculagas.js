// Valores de entrada //
const valorEtanol = 3.89;
const valorGasolina = 5.09;
const tipoDoCombustivel = 'Gasolina';
const kilometrosPorLitro = 14;
const valorDoKmDaViagem = 1100;

const litrosConsumidos = valorDoKmDaViagem / kilometrosPorLitro;


if (tipoDoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * valorEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * valorGasolina;
    console.log(valorGasto.toFixed(2));
}



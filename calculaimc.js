// function calculaImc(valorPeso, valorAltura){
//     return valorPeso / Math.pow(valorAltura, 2);
// }

// function classificaImc(imc){
//     if (imc <= 18.5){
//         return ('Abaixo do peso')
//     }else if (imc >= 18.25 && imc <= 25){
//         return ('Peso normal')
//     }else if (imc >= 30 && imc <=40){
//         return ('Obeso')
//     }else{
//         return ('Obesidade grave')
//     }
// }

//     (function (){
//         const valorPeso = 74;
//         const valorAltura = 1.83;
    
//         const imc = calculaImc(valorPeso, valorAltura)
//         console.log(classificaImc(imc))
//     }
// )();



class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculaImc(){
        return this.peso / (this.altura * this.altura);
    }
    classificaImc(){
        const imc = this.calculaImc(); 
        if (imc <= 18.5){
            return ('Abaixo do peso')
        }else if (imc >= 18.25 && imc <= 25){
            return ('Peso normal')
        }else if (imc >= 30 && imc <=40){
            return ('Obeso')
        }else{
            return ('Obesidade grave')
        }
    }
}
const carlos = new Pessoa('carlos', 74, 1.83 );
console.log(carlos.calculaImc())
const marina = new Pessoa('marina', 61, 1.69);
console.log(marina.calculaImc())




class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
        }

        descrever(){
            console.log(`Meu nome é ${this.nome}e minha idade é ${this.idade}`)
        }

    }
// const carlos = new Pessoa('Carlos', 29);
// console.log(carlos)

function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome}é mais velho que ${p2.nome}`);
    }else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    }else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}
const carlos = new Pessoa ('carlos', 29);
const marina = new Pessoa ('marina', 31)

compararPessoas(carlos, marina);
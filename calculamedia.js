const nota1 = 6;
const nota2 = 8;
const nota3 = 10;

const media = (nota2 + nota2 + nota3) /3;
console.log(media)

if(media <= 5){
    console.log( 'Reprovação')
} else if(media >= 5 && media <= 7){
    console.log('Recuperação')
} else{
    console.log('Aprovação')
}
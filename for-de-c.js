const nomeDeEstudantes = ['José', 'João', 'Victor', 'Tiago', 'Bombado'];


// for (let i = 0; i < 5; i++) { // comum usar o i como variavel nos casos de uso do for
//    console.log(nomeDeEstudantes[i]) // parte que será repetido
// } // no caso do for voce coloca a variavel de base, informa ate que valor ela vai repetir
// e por ultimo ela coloca o que vai ser feito caso a condição do meio ainda nao tenha sido atendida

//let indice = 0 //igualo um ao outro pra manusear os codigos

// while (indice < nomeDeEstudantes.length) { //ele usou o length para dar mais
//    //robustez ao codigo, dessa forma nao vai importar o tamanho do array
//    console.log(nomeDeEstudantes[indice]);
//    indice++;
// }

//agora a versão mais robusta

for (let i = 0; i < nomeDeEstudantes.length; i++) {
    console.log(nomeDeEstudantes[i]);
}
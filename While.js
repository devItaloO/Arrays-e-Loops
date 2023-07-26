const nomeDeEstudantes = ['José', 'João', 'Victor', 'Tiago', 'Bombado'];

let indice = 0 //igualo um ao outro pra manusear os codigos

//console.log(nomeDeEstudantes[indice]);
//indice++;

//console.log(nomeDeEstudantes[indice]);
//indice++;

//console.log(nomeDeEstudantes[indice]);
//indice++;

//console.log(nomeDeEstudantes[indice]);
//indice++;

//console.log(nomeDeEstudantes[indice]);
//indice++;
//soma um ao valor anterior

// iremos usar o while para tirar a necessidade de repetir um mesmo codigo varias vezes

while (indice < nomeDeEstudantes.length) { //ele usou o length para dar mais
    //robustez ao codigo, dessa forma nao vai importar o tamanho do array
    console.log(nomeDeEstudantes[indice]);
    indice++;
}

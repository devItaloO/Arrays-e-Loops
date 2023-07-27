const palavra = 'França';


let encontrado = false //sera uma booleana pois so quer saber se encontrou ou n o "h"
for (let letra of palavra) {
    //console.log(letra) // para visualizar o funcionamento
    if (letra === 'h') {
        console.log('Tem a letra h');
        encontrado = true
        break; // ele pausa o processo, isso serve para não ficar em loop repetindo toda vez que tem h
    }

}

//if (encontrado = false) { //normalmente se utiliza a outra forma por ser mais clean
if (!encontrado) {
    console.log("Não tem H")
}
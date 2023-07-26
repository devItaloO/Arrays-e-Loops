nomeDosPaises = ['França', 'Italia', 'Uganda', 'Guiana', 'Argentina']

//adcionar pais ao final da lista
nomeDosPaises.push('Bolivia');
console.log(nomeDosPaises);

//remover pais do final da lista
nomeDosPaises.pop();
console.log(nomeDosPaises);

//remover um pais do começo da lista
nomeDosPaises.shift();
console.log(nomeDosPaises);

//adciona um pais ao começo da lista
nomeDosPaises.unshift('Letônia');
console.log(nomeDosPaises);

// é necessario criar um acodigo robusto, se eu usar somnente o codigo abaixo
// e alguem adcionar mais um item ao meu array, o codigo nao retornara mais o 
//resultado ideal
console.log(nomeDosPaises[4]);

// entao iremos trabalhar da forma abaixo:

const ultimo = paises[paises.length - 1]; //no lugar de colocar um numero que pdoe ser alterado depois
console.log(ultimo);

console.log(nomeDosPaises[1]);

console.log(nomeDosPaises[2]); //lembrando que o indice 2 se refere ao terceiro pais
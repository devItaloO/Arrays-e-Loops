const nomeDeEstudantes = ['José', 'João', 'Victor', 'Tiago'];

console.log(`A lista inical é: ${nomeDeEstudantes}`);
nomeDeEstudantes.shift();
//O .shift pode ser usar para tirar um item de um array,e como ele retorna o item
// e ele pode ser usado em outro local. Ex:

const primeiro = nomeDeEstudantes.shift();

console.log(nomeDeEstudantes);
console.log(primeiro);

//para inserir um nome ou dado a um array usamos o processo contrario
// .unshift() - também inserimos o nome que queremos acrescentar ao array


nomeDeEstudantes.unshift('Natsu');
console.log(nomeDeEstudantes);
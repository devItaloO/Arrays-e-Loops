const nomeDeEstudantes = ['José', 'João', 'Victor', 'Tiago'];

//.push serve para empurrar, colocar no final d oarray o dado que voce pretende acrescentar
//isso pode acontecer varias vezes. Ex:
nomeDeEstudantes.push('Pedro');
nomeDeEstudantes.push('Pedro');
nomeDeEstudantes.push('Pedro');
nomeDeEstudantes.push('Pedro');
nomeDeEstudantes.push('Pedro');

//já o .pop faz o processo contrário, ele remove o último item da variavel
// mesmo se for informado outro item, sempre será o último que será removido
// no caso 
nomeDeEstudantes.pop()
nomeDeEstudantes.pop()
nomeDeEstudantes.pop()
nomeDeEstudantes.pop()

console.log(nomeDeEstudantes)
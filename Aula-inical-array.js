const nome1 = "Ana"
const nome2 = "José"
const nome3 = "Lucy"
const nome4 = "Happy"

const nomeDosParticipantes = ["Ana", "José", "Lucy", "Happy"]
//lembrando que o contador começa no 0 em arrays, no caso acima temos 4 nomes
//logo o array vai de 0 até 3
//dessa forma temos que repetir varias vezes variaveis diferentes
//isso pode ser usado para agrupar dados do mesmo grupo, tipo nomes
//mas tambem da pra ser usado como dados de uma mesma pessoa.
//Ex: O nome, idade, altura, tamanho, etc...
// a posição de um item se chama index

console.log(nomeDosParticipantes) //imprime todos os dados que estão no array

console.log(nomeDosParticipantes[0])
console.log(nomeDosParticipantes[1])
console.log(nomeDosParticipantes[2])

//atenção ao alocar os indices dos arrays, se estiver com algum errado, dependendo
//do programa irá travar tudo
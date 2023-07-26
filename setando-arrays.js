const nomeDosParticipantes = ['José', 'Ana', 'Maria', 'Marcos', 'Jhony'];

nomeDosParticipantes[0] = 'Lucas';
//por mais que seja uma const, voce nao esta modificando o tipo de variavel
//somente o conteudo dentro dela

const x = 3
//posso definir uma variavel como um nomero, parar percorrer o array de forma 
//mais pratica
nomeDosParticipantes[0] = 'vanderleia';
nomeDosParticipantes[1] = 'Debora';
nomeDosParticipantes[2] = 'Leonardo';
nomeDosParticipantes[x] = 'Diego';


console.log(nomeDosParticipantes)
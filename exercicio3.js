const numbers = [1, 3, 5, 8, 14, 62];

//let i = 0
//let resultado = 0

//while (i < numbers.length) {
//    resultado = numbers[i] + resultado;
//    i++;
//}

//console.log(resultado);

// o exemplo acima deu certo

let soma = 0;
// para ("para algo", "enquanto isso for verdade", "será feito isso")
for (let i = 0; i < numbers.length; i++) {
    //será executado para i de 0 até o ultimo
    soma = soma + numbers[i];
    //ou soma += numbers[i]
}

console.log(soma);
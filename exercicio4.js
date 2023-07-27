const palavra = "Bananada"

//identificar quantas letras A existem na palavra

let numerodeAs = 0

for (let letra of palavra) {
    if (letra === 'a') {
        numerodeAs++;
    }
}

if (numerodeAs === 0) {
    console.log("Não foram encontradas letras 'A' na palavra");
} if (numerodeAs > 0) {
    console.log(`Foram encontradas ${numerodeAs} letras A na palavra`)
}

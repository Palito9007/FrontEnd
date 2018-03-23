function main() {
    var frase = "aaaa";
    var vogal = ['a','e','i','o','u'];
    var quantVogais = 0;
    var posicaoFrase = frase.lenght;
    while (posicaoFrase != 0, posicaoFrase--){
        quantVogais = frase[posicaoFrase] == vogal ? quantVogais = quantVogais + 1  : quantVogais = quantVogais;
    }
    console.log(quantVogais);
}

main();
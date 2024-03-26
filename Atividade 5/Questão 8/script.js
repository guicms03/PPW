function verificarPalindromo(palavra) {
    // Remover espaços em branco e converter para minúsculas para evitar discrepâncias
    palavra = palavra.toLowerCase().replace(/ /g, '');

    // Inverter a palavra
    var palavraInvertida = palavra.split('').reverse().join('');

    // Verificar se a palavra invertida é igual à palavra original
    return palavra === palavraInvertida;
}

// Exemplos de uso da função
console.log(verificarPalindromo("ovo"));        // Deve retornar true (palíndromo)

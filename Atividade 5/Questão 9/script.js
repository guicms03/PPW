function decimalParaBinario(numero) {
    // Verificar se o número é válido
    if (typeof numero !== 'number' || isNaN(numero)) {
        return "Número inválido";
    }

    // Converter o número para sua representação binária
    var binario = (numero >>> 0).toString(2);

    return binario;
}

// Exemplos de uso da função
console.log(decimalParaBinario(10));   // Deve retornar "1010"
console.log(decimalParaBinario(21));   // Deve retornar "10101"
console.log(decimalParaBinario(100));  // Deve retornar "1100100"
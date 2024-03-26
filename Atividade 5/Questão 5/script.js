function verificarNumeroPrimo(numero) {
    // Verificar se o número é menor ou igual a 1, pois números menores ou iguais a 1 não são primos
    if (numero <= 1) {
        return false;
    }

    // Verificar se o número é divisível por qualquer número entre 2 e a raiz quadrada do número
    for (var i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false; // Se for divisível, não é primo
        }
    }

    return true; // Se não for divisível por nenhum número, é primo
}

// Exemplos de uso da função
console.log(verificarNumeroPrimo(7));  // Deve retornar true (7 é primo)
console.log(verificarNumeroPrimo(12)); // Deve retornar false (12 não é primo)
console.log(verificarNumeroPrimo(2));  // Deve retornar true (2 é primo)
console.log(verificarNumeroPrimo(1));  // Deve retornar false (1 não é primo)
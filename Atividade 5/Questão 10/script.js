function calcularFatorial(numero) {
    // Verificar se o número é válido
    if (typeof numero !== 'number' || isNaN(numero) || numero < 0) {
        return "Número inválido";
    }

    // Caso base: se o número for 0 ou 1, o fatorial é 1
    if (numero === 0 || numero === 1) {
        return 1;
    }

    // Inicializar o resultado do fatorial como 1
    var fatorial = 1;

    // Calcular o fatorial do número
    for (var i = 2; i <= numero; i++) {
        fatorial *= i;
    }

    return fatorial;
}

// Exemplos de uso da função
console.log(calcularFatorial(5));   // Deve retornar 120 (5!)
console.log(calcularFatorial(0));   // Deve retornar 1 (0!)
console.log(calcularFatorial(10));  // Deve retornar 3628800 (10!)
console.log(calcularFatorial(-5));  // Deve retornar "Número inválido"
console.log(calcularFatorial(2)); // Deve retornar "Número inválido"

function verificarParOuImpar(numero) {
    // Verificar se o resto da divisão por 2 é igual a 0
    if (numero % 2 === 0) {
        return true; // Retorna true se for par
    } else {
        return false; // Retorna false se for ímpar
    }
}

verificarParOuImpar(1);
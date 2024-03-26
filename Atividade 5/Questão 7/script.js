function calcularValorAcrescidoPorcentagem(valor, porcentagem) {
    // Calcula o valor acrescido da porcentagem
    var valorAcrescido = valor + (valor * porcentagem / 100);
    
    return valorAcrescido;
}

// Exemplos de uso da função
console.log(calcularValorAcrescidoPorcentagem(100, 10));   // Deve retornar 110 (100 + 10% de 100)
console.log(calcularValorAcrescidoPorcentagem(50, 20));    // Deve retornar 60 (50 + 20% de 50)
console.log(calcularValorAcrescidoPorcentagem(200, 15));   // Deve retornar 230 (200 + 15% de 200)
console.log(calcularValorAcrescidoPorcentagem(1000, 5));   // Deve retornar 1050 (1000 + 5% de 1000)

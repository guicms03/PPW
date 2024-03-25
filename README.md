Questão 1:
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Personalized Welcome Message</title>
<script>
    // Definindo a função para exibir a mensagem de boas-vindas personalizada
    function exibirMensagemDeBoasVindas() {
        // Perguntar ao usuário seu nome
        var nome = prompt("Qual é o seu nome?");
        
        // Verificar se o usuário inseriu um nome
        if (nome != null && nome != "") {
            // Exibir a mensagem de boas-vindas personalizada
            alert("Bem-vindo, " + nome + "! Espero que você aproveite a sua visita ao nosso site.");
        } else {
            // Se o usuário não inseriu um nome, exibir uma mensagem padrão
            alert("Bem-vindo! Espero que você aproveite a sua visita ao nosso site.");
        }
    }

    // Adicionando um ouvinte de evento para o evento 'load'
    window.addEventListener('load', exibirMensagemDeBoasVindas);
</script>
</head>
<body>
<!-- Conteúdo da página -->
</body>
</html>

Questão 2:
function verificarParOuImpar(numero) {
    // Verificar se o número é par
    if (numero % 2 === 0) {
        return true; // Retorna true se for par
    } else {
        return false; // Retorna false se for ímpar
    }
}

// Exemplos de uso da função
console.log(verificarParOuImpar(10)); // Deve retornar true (10 é par)
console.log(verificarParOuImpar(7));  // Deve retornar false (7 é ímpar)
function verificarParOuImpar(numero) {
    // Verificar se o número é par
    if (numero % 2 === 0) {
        return true; // Retorna true se for par
    } else {
        return false; // Retorna false se for ímpar
    }
}

// Exemplos de uso da função
console.log(verificarParOuImpar(10)); // Deve retornar true (10 é par)
console.log(verificarParOuImpar(7));  // Deve retornar false (7 é ímpar)
Questão 3:
function calcularMediaAritmetica(numeros) {
    // Verificar se o array não está vazio
    if (numeros.length === 0) {
        return 0; // Se o array estiver vazio, retorna 0
    }

    // Somar todos os números do array
    var soma = numeros.reduce(function(total, numero) {
        return total + numero;
    }, 0);

    // Calcular a média aritmética
    var media = soma / numeros.length;
    return media;
}

// Exemplos de uso da função
var numeros1 = [5, 10, 15, 20];
var numeros2 = [2, 4, 6, 8, 10];

console.log("Média do conjunto 1:", calcularMediaAritmetica(numeros1)); // Deve retornar 12.5
console.log("Média do conjunto 2:", calcularMediaAritmetica(numeros2)); // Deve retornar 6
Questão 4:
function converterParaCaixaAlta(texto) {
    return texto.toUpperCase();
}

// Exemplos de uso da função
var texto1 = "Olá, mundo!";
var texto2 = "Este é um exemplo de texto.";

console.log(converterParaCaixaAlta(texto1)); // Deve retornar "OLÁ, MUNDO!"
console.log(converterParaCaixaAlta(texto2)); // Deve retornar "ESTE É UM EXEMPLO DE TEXTO."
Questão 5:
function verificarNumeroPrimo(numero) {
    // Verificar se o número é menor ou igual a 1
    if (numero <= 1) {
        return false; // Números menores ou iguais a 1 não são primos
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
Questão 6:
function inverterArray(array) {
    return array.reverse();
}

// Exemplos de uso da função
var array1 = [1, 2, 3, 4, 5];
var array2 = ["a", "b", "c", "d", "e"];

console.log("Array original:", array1);
console.log("Array invertido:", inverterArray(array1));

console.log("Array original:", array2);
console.log("Array invertido:", inverterArray(array2));

Questão 7:
function calcularValorComPorcentagem(valor, porcentagem) {
    // Converter a porcentagem para decimal dividindo por 100
    var porcentagemDecimal = porcentagem / 100;

    // Calcular o valor acrescido da porcentagem
    var valorComPorcentagem = valor + (valor * porcentagemDecimal);

    return valorComPorcentagem;
}

// Exemplos de uso da função
console.log(calcularValorComPorcentagem(100, 10)); // Deve retornar 110 (100 + 10% de 100)
console.log(calcularValorComPorcentagem(50, 20));  // Deve retornar 60 (50 + 20% de 50)
Questão 8:
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
console.log(verificarPalindromo("arara"));      // Deve retornar true (palíndromo)
console.log(verificarPalindromo("reconhecer")); // Deve retornar true (palíndromo)
console.log(verificarPalindromo("casa"));       // Deve retornar false (não palíndromo)

Questão 9:
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
console.log(decimalParaBinario(-12));  // Deve retornar "Número inválido"
console.log(decimalParaBinario("ABC")); // Deve retornar "Número inválido"
Questão 10:
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
console.log(calcularFatorial("ABC")); // Deve retornar "Número inválido"


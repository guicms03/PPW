function calcularMediaAritmetica(numeros) {
    // Verificar se o array não está vazio
    let soma=0;
    if (numeros.length === 0) {
        return 0; // Se o array estiver vazio, retornar 0
    }
    for (num in array) {
        soma+=array[num]

    }
    return soma/array.length

let num = [1,2,3,4];
console.log(calcularMediaAritmetica(num));

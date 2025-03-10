//Crie uma função que dado um array de números desordenados retorna uma array com os números ordenados na ordem crescente
const lista = [20, 15, 40, 25, 30];

function descobrirMenorValor(posicaoInicial) {
    let menorNumero = posicaoInicial;
    for(let valorAtual = posicaoInicial; valorAtual < lista.length; valorAtual++){
        if (lista[valorAtual] < lista[menorNumero]) {
            menorNumero = valorAtual;
        }
    }
    return menorNumero;
}



for (let atual = 0; atual < lista.length; atual++) {
    //salvar o retorno da funcao
    let menor = descobrirMenorValor(atual);
    //guardando a propria inforcao nao o indice
    let numeroAtual = lista[atual];
    let menorValor = lista[menor];


    lista[atual] = menorValor;
    lista[menor] = numeroAtual;
}

console.log(lista);
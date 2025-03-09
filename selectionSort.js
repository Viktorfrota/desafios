const lista = require("./lista.js");

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
      
}
descobrirMenorValor(1);
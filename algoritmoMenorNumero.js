                        //0  1  2  3  4
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
    
    module.exports = algoritmoMenorNumero;
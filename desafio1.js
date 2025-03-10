//Crie uma função que dado um array de números retorna apenas o elemento mais alto entre eles

const lista = require("./lista.js");

let atual = 0
let maiorNumero = 0

    for(; atual < lista.length; atual++){
        if (lista[atual] > lista[maiorNumero]) {
            maiorNumero = atual;
        }
}
console.log(`${lista[maiorNumero]}`);
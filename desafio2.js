                        //0  1  2  3  4
const lista = require("./lista.js");

let maiorNumero = 0;
let menorNumero = 0;
let valorAtual = 0;
let listaOrganizada=[];

    for(;                     valorAtual < lista.length; valorAtual++){
        if (lista[valorAtual] < lista[menorNumero]) {
            menorNumero = valorAtual;
        }
    }

        for(let atual = 0;        atual < lista.length; atual++){
            if (lista[atual] > lista[maiorNumero]) {
                maiorNumero = atual;
            }
        }
        
    console.log(`valor maior e ${lista[maiorNumero]}`);
    console.log(`valor menor e ${lista[menorNumero]}`);
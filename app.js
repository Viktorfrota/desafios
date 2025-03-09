const lista = [10,25,15,5,40];

let atual = 0
let maiorNumero = 0

    for(; atual < lista.length; atual++){
        if (lista[atual] > lista[maiorNumero]) {
            maiorNumero = atual;
        }
}
console.log(`${lista[maiorNumero]}`);
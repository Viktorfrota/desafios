const lista1 = [10,25,15,5,40];

let atual = 0
let maiorNumero = 0

    for(; atual < lista1.length; atual++){
        if (lista1[atual] > lista1[maiorNumero]) {
            maiorNumero = atual;
        }
}
console.log(`${lista1[maiorNumero]}`);
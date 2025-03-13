//Crie um programa que gere 6 números aleatórios entre 1 e 60 para um sorteio da Mega-Sena.

let numerosAleatorios = [];


function geradorDeNumero (){
    return parseInt(Math.random() * 60 + 1);
}

function imputNumero(){
    let quantidade = 6;
    let numeroRandom =0;
    for (let repetidor = 0; repetidor < quantidade; repetidor++) {
        if (numeroRandom = geradorDeNumero()){
        numerosAleatorios.push(numeroRandom);
        }
    }
}

console.log(numerosAleatorios);

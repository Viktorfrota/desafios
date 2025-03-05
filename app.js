let numeros =[];
for (let i = 0; i < 4; i++){
    var num = parseFloat(prompt(`digite um numero ${i + 1}`));
    numeros.push(num);
    console.log(numeros)
}


function maiorNumero(numeros){
    //encontra e retorna o maior valor dentro do array
    return Math.max(...numeros);
}

alert(`o maior numero encontrado foi ${maiorNumero(numeros)}`);

//Crie um programa que gere 6 números aleatórios entre 1 e 60 para um sorteio da Mega-Sena.

function gerar_numero_mega_cena() {
    const quantidade_de_numeros = 6
    let numeros_sorteados = new Set(); // nao permite valores repitidos(automaticamente impede que valores repitidos sejam inseridos)

    while (numeros_sorteados.size < quantidade_de_numeros) { 
        let numero = Math.floor(Math.random() * 60) + 1;
        numeros_sorteados.add(numero); // Se o número já existir, ele não será adicionado novamente
    }

    return [...numeros_sorteados].sort((a, b) => a - b); // Converte o Set em array e ordena
}

console.log(gerar_numero_mega_cena());


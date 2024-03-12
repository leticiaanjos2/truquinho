// Importando a biblioteca readline-sync
const readlineSync = require('readline-sync');

let senhaCorreta = '1234';
let senhaDigitada;

// Loop do-while para solicitar a senha até que seja correta
do {
    // Solicita ao usuário que insira a senha
    senhaDigitada = readlineSync.question('Digite sua senha: ', {
        hideEchoBack: true // Para ocultar a senha digitada
    });

    // Verifica se a senha está correta
    if (senhaDigitada !== senhaCorreta) {
        console.log('Senha incorreta. Tente novamente.');
    }
} while (senhaDigitada !== senhaCorreta);

// Se o loop terminou, significa que a senha foi correta
console.log('BEM-VINDO!');
const manilhas = ['Ouros', 'Espadas', 'Copas', 'Paus'];
const forcas = ['4', '5', '6', '7', 'Q', 'J', 'K', 'A', '2', '3'];

let deck = [];

for (let naipe of manilhas) {
    for (let forca of forcas) {
        deck.push(forca+naipe);
    }
}

console.log(deck);
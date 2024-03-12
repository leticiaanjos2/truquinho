const manilhas = ['Ouros', 'Espadas', 'Copas', 'Paus'];
const forcas = ['4', '5', '6', '7', 'Q', 'J', 'K', 'A', '2', '3'];

let deck = [];

for (let naipe of manilhas) {
    for (let forca of forcas) {
        deck.push(forca+naipe);
    }
}

console.log(deck);
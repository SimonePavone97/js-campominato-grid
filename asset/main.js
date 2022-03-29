// Griglia Campo Minato

// Generare una griglia di gioco quadrata, simile a quella dello screenshot, 
// in cui ogni cella contiene un numero tra 1 e 100.

// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.




// seleziono l'id GRID dall'html e gli do una variabile let
let grid = document.getElementById('grid');




// creo CICLO FOR per svilupare i box interni alla griglia
for ( let i = 1; i <= 100; i++) {

    // creo una variabile box inserendoci dentro un elemento div creato
    let box = document.createElement('div');
    
    // aggiungo il testo dei numeri in senso continuo, non random
    box.innerHTML += `<div>${i}</div>`;

    // aggiungo una classe al div con dentro BOX
    box.classList.add('box');

    // incolliamo let box e il suo contenuto all'interno del div con id=grid in html
    grid.appendChild(box);

    // funzione al click
    box.addEventListener('click', function(){
        console.log(this);
        this.classList.add('clicked');
        console.log(this.innerHTML);
        let numero = this.innerHTML;
    });
}
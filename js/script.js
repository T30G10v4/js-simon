/*
Ciao ragazzi,
Esercizio di oggi: Simon Says
nome repo: js-simon
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri spariscono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

/* PSEUDOCODICE

1 (*) Estraggo 5 numeri da 1 a 100 diversi tra loro e li pusho in un array;
2 (*) Li stampo in pagina tramite un h1;
3 (*) Faccio partire un timer di 30000 millisecondi (30 secondi);
4 (*) Scrivo il timer a schermo
5 (*) QUANDO il timer è a 0
    5.1 (*) Nascondo i numeri nell'h1
    5.2 (*) Termino il timer
6 (*) ripeto 5 volte...
    6.1 (*) Chiedo all'utente un numero tramite prompt();
    6.2 (*) Se il numero è presente nell'array
        6.2.1 (*) Incremento la variabile guessed di uno;
7 (*) Stampo a video i numeri e i numeri indovinati;
8 (*) Fine;

*/

const numbers = getRndNumbers(5, 1, 100);

const numbersDOM = document.getElementById("numbers");
const timerDOM = document.getElementById("timer");

let timer = 30;
let guessed = 0;

showNumbers(numbersDOM, numbers);

let countdown = setInterval(() => {
    if(timer > 0) {

        timerDOM.innerHTML = timer.toString();
        timer--;

    } else {

        timerDOM.innerHTML = "";
        numbersDOM.innerHTML = "";
        clearInterval(countdown);

    }
}, 1000);

for(let i = 0; i < numbers.length; i++) {

    const result = `inserisci il numero in posizione ${i+1}`;
    const guess = parseInt(prompt(result)); 
    if (numbers.includes(guess)) {

        guessed++;

    }

}

const result = `Hai indovinato ${guessed} numeri!`
numbersDOM.innerHTML = result;

console.log(numbers);

// FUNCTIONS

/**
 * Description: Funzione che ritorna un array di "times" numeri casuali non uguali tra di loro tra
 *              "min" e "max"
 * @param {number} times - Dimensione dell'array ritornato
 * @param {number} min - Il minimo valore dei numeri casuali
 * @param {number} max - Il massimo valore dei numeri casuali
 * @returns {Array} 
 */
function getRndNumbers(times, min, max) {

    let numbers = [];

    while(numbers.length < times) {

        const value = getRndInteger(min, max);

        if (numbers.includes(value)) {

            continue;

        } else {

            numbers.push(value);

        }

    }

    return numbers;

}

/**
 * Description: Funzione che ritorna un numero casuale intero tra "min" e "max" estremi compresi
 * @param {number} min - Il minimo valore del numero estratto
 * @param {number} max - Il massimo valore del numero estratto
 * @returns {number}
 */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


/**
 * Description: Funzione che scrive nel DOM l'array di numeri
 * @param {object} numbersDOM - L'oggetto DOM dove scrivere i numeri
 * @param {Array} numbers - L'array di numeri
 * @returns {void}
 */
function showNumbers(numbersDOMFunction, numbers) {
    
    for(let i = 0; i < numbers.length ; i++) {

        numbersDOMFunction.innerHTML += `${numbers[i]} `;

    }

}


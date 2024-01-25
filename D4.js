/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/



function areaRettangolo(l1, l2) {
   return l1 * l2;
}

console.log("es.1  area del primo rettangolo: ", areaRettangolo(8, 9), "mt²")


console.log("es.1  area del secondo rettangolo: ", areaRettangolo(4, 7), "mt²")



/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(num1, num2){
    if (num1 === num2){
        return 3 * (num1 + num2);
    } else {
        return (num1 + num2);
    }
}

console.log("es.2  primo esempio: ", crazySum(2, 2))
console.log("es.2  secondo esempio: ", crazySum(5, 2))

// potrei creare due numeri randomizzati

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/



const crazyDiff = function(x){
    if ( x > 19){
        return Math.abs( x - 19) * 3;
    } else {
        return Math.abs( x - 19)
    }
}

console.log("es.3  primo esempio: ", crazyDiff(12))
console.log("es.3  secondo esempio: ", crazyDiff(19))
console.log("es.3  terzo esempio: ", crazyDiff(25))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function (n){
    if( n > 20 && n <= 100 || n === 400 ){
        return true
    }else{
        return false
    }
}

console.log("es.4  0: ", boundary(0))
console.log("es.4  35: ", boundary(35))
console.log("es.4  100: ", boundary(100))
console.log("es.4  120: ", boundary(120))
console.log("es.4  400: ", boundary(400))

    // implementare il controllo se sia un numero intero
    // forse si può usare switch che però devo capire meglio


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function(stringa){
    if(stringa.startsWith('EPICODE')){
        return stringa;
    }else{
        return "EPICODE" + stringa;
    }
}

console.log("es.5    EPICODE: you will be the best developer!  ", epify("EPICODE: you will be the best developer!"))
console.log("es.5    : you will be the best developer!: ", epify(": you will be the best developer!"))

// implementare il controllo se sia una frase o dei numeri

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

let checkand7 = function (x){
   
        if (x % 3 === 0 && x % 7 === 0){
            console.log("è un numero divisibile per 3 e per 7")
        }else{
            if (x % 3 === 0 && x % 7 !== 0){
                console.log("è un numero divisibile per 3")
            }else{
                if (x % 7 === 0 && x % 3 !== 0){
                    console.log("è un numero divisibile per 7")
                }else{
                    console.log("non è divisibile nè per 3 nè per 7")
                }
            }
        } 
    }

console.log("es.6   21:")
checkand7(21)

console.log("es.6   15:")
checkand7(15)

console.log("es.6   14:")
checkand7(14)

console.log("es.6   23:")
checkand7(23)

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

let reverseString = function (stringa) {
    return stringa.split('').reverse().join('')
}

console.log("es.7   Ciao --> ", reverseString("Ciao"))


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

let upperFirst = function (stringa) {
    return stringa.charAt(0).toUpperCase() + stringa.slice(1);
}

console.log("es.8   bella bazza javascript --> ", upperFirst("bella bazza javascript"))

// non avevo letto bene

const frase = "bella bazza javascript";
const parole = frase.split(" ");

for (let i = 0; i < parole.length; i++) {
   parole[i] = parole[i][0].toUpperCase() + parole[i].substr(1);
}

console.log("es.8    bella bazza javascript --> ", parole.join(" "));


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const cutString = function (stringa) {
    return stringa.substr(1, stringa.length - 2)
}

console.log("es.9   javascript --> ", cutString("javascript"))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
let giveMeRandom = function (n){
    return arr = Array.from({
        length: n
    }, () => Math.floor(Math.random() * 10));
}

console.log (giveMeRandom(5))

function randomArray (n){
    return arr = Array(n).fill().map(() => Math.round(Math.random() * 10))
}

console.log (randomArray(7))
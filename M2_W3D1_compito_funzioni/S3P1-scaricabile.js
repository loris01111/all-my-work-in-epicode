/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* function sommaNumeriInteri(numeroIntero1, numeroIntero2){
  let somma = numeroIntero1 + numeroIntero2;
  if(numeroIntero1===numeroIntero2){
    somma = somma*3; 
  }
  return somma; 
}

let crazySum = sommaNumeriInteri(5,5);
console.log(crazySum);*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* function boundary(numeroIntero){
    let numero = numeroIntero;
    if((numeroIntero>=20 && numeroIntero<=100) || numeroIntero===400){
       numero = true; 
    }
    return numero;
}

console.log(boundary(400)); */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* function reverseString(stringa) {
    let riga = stringa.split("").reverse().join("");
    return riga;
}

console.log(reverseString("loris"));*/

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/*function upperFirst(stringa){
    let frase = stringa.charAt(0).toUpperCase() + stringa.substr(1);
    return frase;
}


console.log(upperFirst("ciao"));*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* function giveMeRandom(n){
    let newArray = [];
    for(let i=0; i<=n; i++){
    newArray.push(Math.round(Math.random()*10));
    }
    return newArray;
}

console.log(giveMeRandom(5)); */

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* function area(l1,l2){
    let base = l1;
    let altezza = l2;
    let areaRettangolo = base * altezza;
    return areaRettangolo;
}

console.log(area(5,2)); */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* function crazyDiff(n){
  let differenza = Math.abs(n-19); 
  if(differenza>19){
    let nuovoValore = differenza * 3; 
    return nuovoValore;
  }else console.log("il valore calcolato è minore di 19");
}

console.log(crazyDiff(65)); */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* function codify(stringa) {
    if (stringa.includes("code", 0)) {
        let sentence = String(stringa);
        return sentence;
    } else {
        let sentence = String("code ") + String(stringa);
        return sentence;
    }
}

console.log(codify("code"));
console.log(codify("Loris")); */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* function check3and7(numero){
    if((numero % 3==0) || (numero % 7==0)){
        return true;
    }else return false;
}

console.log(check3and7(9));
console.log(check3and7(4));*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* function cutString(stringa){
 let stringWithoutFirst = stringa.split("").slice(1,-1).join("");ss
 return stringWithoutFirst;
}

console.log(cutString("Ciao come stai")); */

//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* let number1 = Number(prompt("inserisci il primo numero"))
let number2 = Number(prompt("inserisci il secondo numero"))


if(number1>number2){
    console.log("il numero maggiore è: " + number1);
}else{
    console.log("il numero maggiore è: " + number2);
} */

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* 
let number1 = Number(prompt("inserisci il numero"));

if(number1<5){
  console.log('tiny');
}else if(number1<10){
  console.log('small');
}else if(number1<15){
  console.log('medium');
}else if(number1<20){
  console.log('large');
}else (number1>=20)
  console.log('huge');
 */

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* // for (let i=0; i<11; i++){
//     if (i===3){
//         continue;
//    }if (i==8){
//     continue
//    }
//     console.log(i);
// }
 */

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* for(let i=0;i<16;i++){
    if(i % 2 == 0){
        console.log(i + " è pari");
    }else{
        console.log(i + " è dispari");
    }
} */

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* let number1 = Number(prompt("inserisci il tuo primo numero"));
let number2 = Number(prompt("inserisci il tuo secondo numero"));

if ((number1 === 8) || (number2 === 8)){
    console.log("uno dei due numeri è 8");
}else if ((number1 + number2 === 8) || (number1 / number2 === 8)){
    console.log("l'addizione o sottrazione tra i due numeri è uguale a 8");
}else {
    console.log("nessuno dei due numeri è uguale a 8, e l'addizione o sottrazione tra i due numeri non è uguale a 8");
} */

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* let totalShoppingCart = Number(prompt("inserisci il totale del carrello"));
let shipping = Number(10);
let totalCheckout = totalShoppingCart + shipping;

if (totalShoppingCart>50){
  shipping = Number(0);
  console.log("devi pagare: " +  "€" + totalCheckout);
}else {
    console.log( "devi pagare: " +  "€" + totalCheckout);
}*/

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* let numberOne = Number(prompt("inserisci il costo del prodotto uno"));
let numberTwo = Number(prompt("inserisci il costo del prodotto due"));
let numberThree = Number(prompt("inserisci il costo del prodotto tre"));
let totalShoppingCart = numberOne + numberTwo + numberThree;
let shipping = Number(10);
let blackFriday = Number( (totalShoppingCart - (totalShoppingCart/100)*20) + shipping);
let totalCheckout = totalShoppingCart + shipping;

if (blackFriday>50){
  shipping = Number(0);
  blackFriday = Number( (totalShoppingCart - (totalShoppingCart/100)*20) + shipping);
  console.log("devi pagare: " +  "€" + blackFriday);
}else {
    console.log( "devi pagare: " +  "€" + blackFriday);
} */

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* let isMale = true; 
let gender = isMale ? "male" : "female";

console.log(gender); */


/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/


// for (i = 0; i<101; i++){
//   if (i % 3 == 0){
//       console.log("Fizz");
//   }else if (i % 5 == 0){
//       console.log("Buzz");
//   }
//   console.log(i);
// }
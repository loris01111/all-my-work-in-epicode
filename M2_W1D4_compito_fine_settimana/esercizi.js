// ESERCIZIO 1
//  Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino. 

//  n.1 
//  In javascript abbiamo due macro categorie di datatype: i dati primitivi e i dati di riferimento.
//  I dati primitivi sono immutabili, una volta creati, non possono cambiare valore; e dipendono dal valore che gli assegniamo.
//  Se a una variabile gli assegniamo un numero, allora quella variabile sarà di tipo number, se gli assegniamo una lettera allora sarà di tipo string e così via.
//  I dati primitivi sono:
//  -number: Tutti i numeri JavaScript vengono memorizzati come numeri decimali. I numeri possono essere scritti con o senza decimali. Possiede valori speciali come +- infinity e NaN.
//  -string: è uguale se vengono delimitati da '' o "".
//  -boolean: è un entità logica che può essere vera o falsa, 
//  -undefiened: è quando una variabile non viene inizializzata.
//  -null: è quando decidiamo di assegnare null a una variabile. Null si da quando la variabile è vuota.
//  -biglnt: può essere utilizzato per memorizzare valori interi troppo grandi per essere rappresentati da un normale numero JavaScript.
//  -symbol: I simboli vengono spesso utilizzati per aggiungere chiavi di proprietà univoche a un oggetto.

//  I dati di riferimento, a differenza dei dati primitivi, vengono memorizzati nello spazio di memoria separato dallo spazio assegnato alla variabile. 
//  La variabile conterrà un riferimento a quel luogo di memoria piuttosto che il valore effettivo.
//  I dati di riferimento sono ad esempio:
//  -array
//  -object
//  -function


//  ESERCIZIO 2
//  Descrivi cos'è un oggetto in JavaScript, con parole tue.
//  ESERCIZIO 2 su epicode
//  Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20 e salvando il risultato in una variabile.

//  n.2 

// Un oggetto in Javascript è un'entità complessa che attribuisce proprietà al fine di modellare un'entità reale.
// Cioè, è come se fosse un contenitore che può attribuire più valori contemporaneamnete alla stessa entità che vogliamo definire.
// Ad esempio se volessimo definire una persona, tramite l'uso di un oggetto potremmo assegnarli più valori contemporaneamnete, valori in coppia chiave-valore come "età":19.

// addizione:

let variabile1 = 12;
let variabile2 = 20;
let variabileSum = variabile1 + variabile2;

console.log(variabileSum); 


// ESERCIZIO 3
//  Crea una variable di nome "x" e assegna ad essa il numero 12.

//   n.3 

let x = 12;
 Console.log(x);


//  ESERCIZIO 4
//  Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.

// n.4

let name = 'Loris';
Console.log(name); 


// ESERCIZIO 5
//  Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).

//  n.5 

 let x = 12;
 Console.log(x-4); 


//  Esercizio 6
//  Crea un oggetto di JavaScript che ti rappresenti (come proprietà usa nome, cognome e hobby).

let Persona = {
    nome: "Loris",
    cognome: "Bove",
    hobby: "leggere",
};

// oppure

let persona = new object();
   nome: "Loris";
   cognome: "Bove";
   hobby: "leggere"; 


//    ESERCIZIO 7
//     Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
//     Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
//     Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
//     NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
   

//     n.7 

    let name1 = "john";
    let name2 = "John";
    let uguaglianzaFalsa = name1 == name2;

    console.log("l'uguaglianza è: " + uguaglianzaFalsa);
    console.log(name1.toLowerCase() == name2.toLowerCase());
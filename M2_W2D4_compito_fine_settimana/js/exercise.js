// const globalData = {
//     utenti: [
//         {
//             name: "Marco",
//             lastName: "Rossi",
//             isAmbassador: true,
//         },
//         {
//             name: "Paul",
//             lastName: "Flynn",
//             isAmbassador: false,
//         },
//         {
//             name: "Amy",
//             lastName: "Reed",
//             isAmbassador: false,
//         },
//     ],
//     prezzi: [
//         34,
//         5,
//         2,
//     ]
// }


// let sumTotal = 0;

// for (let index = 0; index < arrayUsers.length; index++) {
//     if (arrayUsers[index].isAmbassador){
//             const prezzo = prices.map((price) => {
//                 return price;
//             })
//             prezzo.forEach((price) => {
//                 sumTotal += price;
//             })
//             let discount = Number((sumTotal * 30) / 100);
//             let sumTotalWithDis = Number(shippingCost + sumTotal - discount);
//             console.log(sumTotalWithDis);

//     } if(!arrayUsers[index].isAmbassador){
//             const prezzo = prices.map((price) => {
//                 return price;
//             })
//             prezzo.forEach((price) => {
//                 sumTotal += price;
//             })
//             let discount = 0
//             let sumTotalWithDis = Number(shippingCost + sumTotal - discount);
//             console.log(sumTotalWithDis);
//     }if(sumTotal<=100){
//       sumTotal += shippingCost;
//       console.log(sumTotal);
//     }
// }

// la prima parte era stata una PeriodicWave, da qui in avanti è la versione corretta.

const marco = {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
}

const paul = {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
}

const amy = {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
}

let utenteCheEffettuaLAcquisto = marco;
const prices = [34, 5, 2]
let shippingCost = 50


let sommaCarrello = 0;

for (let i = 0; i < prices.length; i++) {
    const prezzo = prices[i];
    sommaCarrello += prezzo;
}
if ((sommaCarrello <= 100) && (utenteCheEffettuaLAcquisto.isAmbassador)) {
    let sconto = (sommaCarrello * 30) / 100;
    sommaCarrello += shippingCost - sconto;
    console.log("essendo ambassador avrai lo sconto di " + sconto + "€ " + "e pagherai " + sommaCarrello + "€" + ", spedizioni incluse");
} else if ((sommaCarrello <= 100) && (!utenteCheEffettuaLAcquisto.isAmbassador)) {
    sommaCarrello += shippingCost
    console.log("Non essendo ambassador non avrai lo sconto e pagherai " + sommaCarrello + "€" + ", spedizioni incluse");
} else if ((sommaCarrello > 100) && (utenteCheEffettuaLAcquisto.isAmbassador)) {
    let shippingCost = 0;
    let sconto = (sommaCarrello * 30) / 100;
    sommaCarrello += shippingCost - sconto;
    console.log("essendo ambassador avrai lo sconto di " + sconto + "€ " + "e pagherai " + sommaCarrello + "€" + ", spedizioni escluse avendo speso più di 100€");
} else if ((sommaCarrello > 100) && (!utenteCheEffettuaLAcquisto.isAmbassador)) {
    let shippingCost = 0;
    sommaCarrello += shippingCost
    console.log("Non essendo ambassador non avrai lo sconto e pagherai " + sommaCarrello + "€" + ", spedizioni escluse");
}



let arrayUsers = [];
arrayUsers.push(marco, paul, amy);
console.log(arrayUsers);

for (const iterator of arrayUsers) {
    let riga = iterator.name + " " + iterator.lastName;
    if (iterator.isAmbassador) {
        riga += " è un ambassador";
        console.log(riga);
    }else {
        riga += " non è un ambassador";
        console.log(riga);
    }
}

let arrayAmbassadors = [];
arrayAmbassadors.push(marco);
console.log(arrayAmbassadors);
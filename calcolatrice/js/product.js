let result = document.getElementById("result");
let buttonDivide = document.getElementById("buttonDivide");
let buttonX = document.getElementById("buttonX");
let buttonMinus = document.getElementById("buttonMinus");
let buttonPlus = document.getElementById("buttonPlus");

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

function somma(number1, number2){

    let somma = number1 + number2;

    result.innerHTML = "il risultato è: " + somma;
}

function moltiplica(number1, number2){


    let prodotto = number1 * number2;

    result.innerHTML = "il risultato è: " + prodotto;
}

function dividi(number1, number2){

    let dividi = number1 / number2;

    result.innerHTML = "il risultato è: " + dividi;
}

function sottrai(number1, number2){

    let sottrazione = number1 - number2;

    result.innerHTML = "il risultato è: " + sottrazione;
}



buttonPlus.addEventListener("click", function(){
    let number1 = Number(num1.value);
    let number2 = Number(num2.value);
    somma(number1, number2);
});

buttonX.addEventListener("click", function(){
    let number1 = Number(num1.value);
    let number2 = Number(num2.value);
    moltiplica(number1, number2);
});


buttonDivide.addEventListener("click", function(){
    let number1 = Number(num1.value);
    let number2 = Number(num2.value);
    dividi(number1, number2);
});


buttonMinus.addEventListener("click", function(){
    let number1 = Number(num1.value);
    let number2 = Number(num2.value);
    sottrai(number1, number2);
});

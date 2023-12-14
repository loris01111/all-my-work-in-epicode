const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const times = document.getElementById("times");
const divide = document.getElementById("divide");
const result = document.getElementById("result");

function sum(){
    const resultSum = Number(number1.value) + Number(number2.value);
    result.innerHTML = "<p>" +  resultSum + "</p>";
}

plus.addEventListener("click",()=>{
    sum()
})

function less(){
    const resultLess = Number(number1.value) - Number(number2.value);
    result.innerHTML = "<p>" +  resultLess + "</p>";
}

minus.addEventListener("click",()=>{
    less()
})

function x(){
    const resultX = Number(number1.value) * Number(number2.value);
    result.innerHTML = "<p>" +  resultX + "</p>";
}

times.addEventListener("click",()=>{
    x()
})

function division(){
    const resultDivision = Number(number1.value) / Number(number2.value);
    result.innerHTML = "<p>" +  resultDivision + "</p>";
}

divide.addEventListener("click",()=>{
    division()
})
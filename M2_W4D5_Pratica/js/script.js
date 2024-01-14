function createForm(){
    const form = document.createElement("form");
    form.setAttribute("id", "form");
    formInputs.map(input => createInput(input, form))
    document.body.append(form);
}

createForm();

function createInput(inputData, inputContainer){
    const input = document.createElement("input");
    input.setAttribute("type",inputData.type);
    input.setAttribute("id", inputData.id);
    input.setAttribute("placeholder", inputData.placeholder);
    inputContainer.append(input);
}


function collectFormData(){
    const form = document.getElementById("form");
    const inputs = form.querySelectorAll("input");
    const arrayOfInputs = Array.from(inputs).map((input) =>{
        return input.value;
    })
    return arrayOfInputs;
}


function showValues(data){
    const div = document.createElement("div");
    div.textContent = data;
    document.body.append(div);
}

const button = document.getElementById("submit");

button.addEventListener("click", function(event){
    event.preventDefault();
    const inputsValueArray = collectFormData();
    inputsValueArray.map(data => showValues(data))  
})



// {
//     name: "valore input name",
//     surname: "valore input surname",
// }
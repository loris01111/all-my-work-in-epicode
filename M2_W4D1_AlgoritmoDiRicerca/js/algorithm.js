function algorithmResearch(title, location) {
    title = title.toLowerCase();
    location = title.toLowerCase();
    const result = [];
    jobs.forEach(job => {
        const jobTitle = job.title.toLowerCase();
        const jobLocation = job.location.toLowerCase();
        if ((jobTitle.includes(title)) || jobLocation.includes(location)) {
            result.push(job);
        }
    });
    return {
        result,
        count: result.length
    }
}

// console.log(algorithmResearch("developer", "us"));


function createForm() {
    const form = document.createElement("form");
    form.setAttribute("id", "form");
    formInputs.map(input => createInputs(input, form));
    document.body.append(form);
}

createForm();

function createInputs(inputData, inputContainer) {
    const input = document.createElement("input");
    input.setAttribute("type", inputData.type);
    input.setAttribute("id", inputData.id);
    input.setAttribute("placeholder", inputData.placeholder);
    inputContainer.append(input);

}

function getValues(){
    const title = document.getElementById("title").value;
    const location = document.getElementById("location").value;
    
    const searchJobs = algorithmResearch(title, location);
    console.log(searchJobs);
    return searchJobs;
}


function showValues(searchJobs){
    const valuesContainer = document.createElement("div");
    const valuesUl = document.createElement("ul");
    searchJobs.result.forEach((value) =>{
        const li = document.createElement("li");
        li.innerHTML = "<p>title: " + value.title + "," + "<br>" + "location: " + value.location + "</p>";
        valuesUl.append(li);
    })
    valuesContainer.append(valuesUl);
    document.body.append(valuesContainer);
}

const button = document.getElementById("submit");

button.addEventListener("click", function(event){
    event.preventDefault();
    showValues(getValues());
})




// function collectData() {
//     const form = document.getElementById("form");
//     const inputs = form.querySelectorAll("input");
//     const arrayOfInputs = Array.from(inputs).map((input) => {
//         return input.value;
//     })
//     return arrayOfInputs;
   
// }


// function showValues(data) {
//     const div = document.createElement("div");
//     div.textContent = data;
//     document.body.append(div);
// }

// const button = document.getElementById("submit");

// button.addEventListener("click", function (event) {
//     event.preventDefault();
//     const inputsValue = collectData();
//     inputsValue.map(data => showValues(data));
    
// })
const addTask = document.getElementById("add-task");
const taskList = document.getElementById("task-list");


function task() {
    const nameTask = document.getElementById("name-task");
    if (nameTask.value.trim() === ""){
        alert("per favore inserisci il testo");
    } else {
        const createLi = document.createElement("li");
        const button = document.createElement("button");
        button.innerText = "delete";
        createLi.textContent = nameTask;
        taskList.append(createLi, button);
        createLi.onclick = function(){ 
            this.classList.toggle("completed");
        }
        button.addEventListener("click", function(){
            createLi.remove();
            button.remove();
        })
        nameTask.value = "";
    }
}

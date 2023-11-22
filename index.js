let rootEl = document.getElementById("root")

let inputEl = document.getElementById("inputEl")

let count = 0;

function statusChanged(id) {
    let pEl = document.getElementById(id);
    pEl.classList.toggle("strike");
}

function deleteEl(id1) {
    let dEl = document.getElementById(id1);
    rootEl.removeChild(dEl)
}

function addTask() {
    
    let inputValue = inputEl.value;
    inputEl.value = ""

    if (inputValue !== "") {

        let divEl = document.createElement("div");

        divEl.classList.add("d-flex","flex-row","w-100")
        
        let checkBox = document.createElement("input");

        count = count + 1

        checkBox.type = "checkbox";

        divEl.appendChild(checkBox);

        let taskBox = document.createElement("div");

        taskBox.classList.add("listItem-style","d-flex","flex-row","justify-content-between","w-75")

        let paraEl = document.createElement("p");

        paraEl.textContent = inputValue;

        paraEl.id = "Item" + count;

        divEl.appendChild(taskBox)

        taskBox.appendChild(paraEl)

        let trashEl = document.createElement("button")
        
        trashEl.classList.add("far", "fa-trash-alt", "delete-icon", "border-0", "trash-bg")
        
        divEl.id = "todo" + count

        taskBox.appendChild(trashEl)

        rootEl.appendChild(divEl)



        checkBox.addEventListener("change", function(){
            statusChanged(paraEl.id);

        })
        trashEl.addEventListener("click", function () {
            deleteEl(divEl.id);
        })
    }
    

}


        
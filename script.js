window.addEventListener('load', () => {
    const form = document.querySelector('#newTastForm')
    const input = document.querySelector('#newInput')
    const list_el = document.querySelector('#task')

    form.addEventListener('submit', (e) =>{
        e.preventDefault();

        let task = input.value;

        if (!task) {
            alert("Please put something");
            return;
        } 
        
        let newTaskEl = document.createElement("div");
            newTaskEl.classList.add("task", "bg-dark", "text-white", "p-2");

        let newTaskContent = document.createElement("div");
            newTaskContent.classList.add("content");
    
            newTaskEl.appendChild(newTaskContent);

        let taskInputEl = document.createElement("input");
            taskInputEl.type = "text";
            taskInputEl.classList.add("text","form-control", "border-1") 
            taskInputEl.value = task;
            taskInputEl.setAttribute("readonly", "readonly")
            newTaskContent.appendChild(taskInputEl)

        let taskActionsEl = document.createElement("div")
            taskActionsEl.classList.add("actions", "mt-1", "d-flex")

        let editElement = document.createElement("buttons")
            editElement.classList.add("edit", "form-control")
            editElement.innerHTML = "Edit"
            

        let deleteElement = document.createElement("buttons")
            deleteElement.classList.add("delete", "form-control")
            deleteElement.innerHTML = "Delete"
            
            

        let doneElement = document.createElement("buttons");
            doneElement.classList.add("done", "form-control")
            doneElement.innerHTML = "Done"


            taskActionsEl.appendChild(editElement)
            taskActionsEl.appendChild(deleteElement);
            taskActionsEl.appendChild(doneElement)

            newTaskEl.appendChild(taskActionsEl);
            list_el.appendChild(newTaskEl);

            input.value = "";

            editElement.addEventListener('click', () =>{
                if(editElement.innerText.toLowerCase() == "edit"){
                    taskInputEl.removeAttribute("readonly")
                    taskInputEl.focus();
                    editElement.innerText = "Save"
                }
                else{
                    taskInputEl.setAttribute("readonly", "readonly")
                    editElement.innerText = "Edit"
                }  
            })
            deleteElement.addEventListener('click', () => {
                list_el.removeChild(newTaskEl)
            })

            doneElement.addEventListener('click', () => {
               if (doneElement.innerText.toLowerCase() == "done"){
                    taskInputEl.style.textDecoration = "line-through"
                }
                else{}
            })
    })
})
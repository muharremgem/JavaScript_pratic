//* ======================================================
//*                     TODO APP
//* ======================================================

const addBtn = document.getElementById("todo-button");
const todoInput = document.getElementById("todo-input");
const todoUl = document.getElementById("todo-ul");


addBtn.addEventListener("click", () => {
    if(todoInput.value.trim() === ""){
        alert( "Please enter new todo");
    }else{
        const newTodo = {
            id: new Date().getTime(),
            completed:false,
            text: todoInput.value,
        };
        createListElement(newTodo);
        todoInput.value = "";
    }

});

const createListElement = (newTodo) => {
    
    const li = document.createElement("li")
    // li.id = newTodo.id;
    li.setAttribute("id",newTodo.id);


    const okIcon = document.createElement("i")
    okIcon.setAttribute("class", "fas fa-check")
    li.appendChild(okIcon);

    const p = document.createElement("p");
    const pTextNode = document.createTextNode(newTodo.text);
    p.appendChild(pTextNode);
    li.appendChild(p);

    const deleteIcon = document.createElement("i")
    deleteIcon.setAttribute("class", "fas fa-trash")
    li.appendChild(deleteIcon);


    console.log(li);

    todoUl.appendChild(li);
};

todoInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter"){
        addBtn.click();
    }
});

window.onload = function(){
    todoInput.focus();
    
}
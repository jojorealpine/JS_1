const toDoForm = document.querySelector(".js-toDoForm")
,toDoInput = toDoForm.querySelector("input")
,toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
const toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos)); //localstorage에 string만 저장 가능. js의 object를 string 으로.
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    span.innerText = text;
    delBtn.innerText = "✔" //window + ;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text : text
        , id : newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value ="";
    saveToDos();
}

function loadToToDos(){
    const loadedToDos = localStorage.getItem("TODOS_LS");
    if(loadedToDos !==null){
        const parsedToDos = JSON.parse(loadedToDos); 
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
    
}

function init(){
    loadToToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();
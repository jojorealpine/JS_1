const toDoForm = document.querySelector(".js-toDoForm")
,toDoInput = toDoForm.querySelector("input")
,toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos = [];

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
    delBtn.addEventListener("click",handleDelete);
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
    event.preventDefault();//prevent a default event
    const currentValue = toDoInput.value;
    paintToDo(currentValue);//paint current value 
    toDoInput.value ="";//after submit reset the text box
    saveToDos();//save current list to the local storage
}

function filterFn(){

}

function handleDelete(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id); 
    });
    toDos = cleanToDos;
    saveToDos();
}

//Loading To Do List
function loadToDos(){
    const loadedToDos = localStorage.getItem("TODOS_LS");
    if(loadedToDos !==null){
        //convert string to Object 
        const parsedToDos = JSON.parse(loadedToDos); 
        parsedToDos.forEach(function(toDo){
            //paint to do list
            paintToDo(toDo.text);
        });
    }
    
}

function init(){
    loadToDos();
    //when there is a submit event at text input
    toDoForm.addEventListener("submit",handleSubmit);
    
}

init();
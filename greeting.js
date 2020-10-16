const form = document.querySelector(".js-form")
    ,input = form.querySelector("input")
    ,greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser"
,SHOW_CL = "showing";

function saveName(text){
    localStorage.setItem(USER_LS,text);
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOW_CL);
    form.addEventListener("submit",handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOW_CL);
    greeting.classList.add(SHOW_CL);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}
function init(){
    loadName();
}

init();
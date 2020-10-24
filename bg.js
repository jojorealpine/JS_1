const body = document.querySelector("body");

const NUM = "3"; //the number of images

function paintBg(){
    const randomNm = Math.ceil(parseInt(Math.random()*NUM))+1;
    const imageFile = "images/"+ randomNm + ".jpg";
    body.style.backgroundImage = "url("+imageFile+")";
}

function init(){
    paintBg();
}

init();
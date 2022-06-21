window.setTimeout((welcome)=>{
    alert(welcome);},150,"Welcome to the keycode Generator");

const displayKey = document.querySelector(".key h2");
const displayKeyClass = document.querySelector(".keyClass h2");
const displayKeyCode = document.querySelector(".keyCode h2");


window.addEventListener("keydown",(e)=>{
    displayKey.innerText = e.key;
    displayKeyClass.innerText = e.code;
    displayKeyCode.innerText = e.keyCode;      
    if(e.keyCode === 32){displayKey.innerText ="Space-bar";}});

const input = document.getElementById("input");
const button = document.getElementById("submit");
const byeBye = document.getElementById("remove");
let list = document.getElementsByTagName("ul")[0];
const listItems =document.getElementsByTagName("li");

button.addEventListener("click",()=>{
    let newListItem = document.createElement("li");
    newListItem.textContent = input.value; list.appendChild(newListItem); input.value = ""})

byeBye.addEventListener("click",()=>{
    let lastItem = document.querySelector("li:last-child");list.removeChild(lastItem)})

for (let listItem of listItems){listItem.addEventListener("mouseover",()=>{
    listItem.textContent = listItem.textContent.toUpperCase();});
    listItem.addEventListener("mouseout",()=>{
        listItem.textContent = listItem.textContent.toLowerCase();})}


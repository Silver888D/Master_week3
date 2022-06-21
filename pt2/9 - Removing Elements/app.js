const input = document.getElementById("input");
const button = document.getElementById("submit");
const byeBye = document.getElementById("remove");
let list = document.getElementsByTagName("ul")[0];

button.addEventListener("click",()=>{let listItem = document.createElement("li");
listItem.textContent = input.value; list.appendChild(listItem);input.value = ""})

byeBye.addEventListener("click",()=>{let lastItem = document.querySelector("li:last-child");
let list = document.getElementsByTagName("ul")[0];list.removeChild(lastItem)})

const input = document.getElementById("input");
const button = document.getElementById("submit");
const hidey = document.getElementById("showhide-btn");
let list = document.getElementsByTagName("ul")[0];

button.addEventListener("click",()=>{let listItem = document.createElement("li");
listItem.textContent = input.value; list.appendChild(listItem);input.value = ""})

hidey.addEventListener("click",()=>{
    if (list.style.display == "none"){list.style.display = "block"; hidey.innerText="hide"}
    else{list.style.display = "none"; hidey.innerText="show"}})
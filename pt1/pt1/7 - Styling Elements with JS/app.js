const image = document.getElementById("cat");
console.log(image.style)

const button = document.getElementById("submit");

button.addEventListener("click",()=>{
    if (image.style.display == "none"){image.style.display = "block"; button.innerText="hide"}
    else{image.style.display = "none"; button.innerText="show"}})
// const heading = document.querySelector("heading")
// const list = document.querySelector(".list-parent")
// const listItems = document.querySelectorAll(".li")
// const green = document.querySelectorAll(".green")

// const items = document.querySelectorAll("li:nth-child(even)")

// for(let i=0; i < items.length; i++){items[i].style.color = "lightgreen"}

const wow = ["red","orange","yellow","green","blue","purple","pink"]
c = 0
const listItems = document.querySelectorAll("li")

for(i=0; i<listItems.length;i++){listItems[i].style.color = wow[c];c++;if (c >= wow.length) {c -= c}}
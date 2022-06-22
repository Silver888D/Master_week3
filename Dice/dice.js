let rolledDie = {die1:"./images/die1.png", die2:"./images/die2.png", die3:"./images/die3.png", die4:"./images/die4.png", die5:"./images/die5.png", die6:"./images/die6.png"}

const totalMsg = document.getElementById("totalMsg");
const msg = document.getElementById("displayMsg");
const rollButton = document.getElementById("roll");
let totalAmount = 0

const rollDie = () => {msg.innerHTML = "Try to get to 20, Hit roll";
    ranDie = Math.floor((Math.random()*6)+1); totalMsg.innerText = totalAmount += ranDie;
    document.getElementById("dieSide").src = rolledDie["die" + ranDie];
    if (ranDie == 1 && totalAmount <=20){msg.innerText = "Fail! You rolled a 1! Try again";totalAmount = 0;}
    if (totalAmount >= 20){msg.innerText = "Congratulations! You've Won!, Hit Roll to try again"; totalAmount = 0;}
    else {currentDie.innerText = ranDie;}}

rollButton.addEventListener("click", rollDie)
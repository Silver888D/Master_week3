const drumButton = document.querySelectorAll(".button").length;

for (var i = 0; i < drumButton; i++) {document.querySelectorAll(".button")[i].addEventListener("click", function () {var buttonSound = this.innerHTML; sound(buttonSound);});}

document.addEventListener("keypress", function (event) {sound(event.key);});

function sound(key) {switch (key) {
    case "a": var sound1 = new Audio("sounds/boom.wav"); sound1.play();break;
    case "s": var sound2 = new Audio("sounds/clap.wav"); sound2.play();break;
    case "d": var sound3 = new Audio('sounds/hihat.wav'); sound3.play();break;
    case "f": var sound4 = new Audio('sounds/kick.wav'); sound4.play();break;
    case "g": var sound5 = new Audio('sounds/openhat.wav'); sound5.play();break;
    case "h": var sound6 = new Audio('sounds/ride.wav'); sound6.play();break;
    case "j": var sound7 = new Audio('sounds/snare.wav'); sound7.play();break;
    case "k": var sound8 = new Audio('sounds/tink.wav'); sound8.play();break;
    case "l": var sound9 = new Audio('sounds/tom.wav'); sound9.play();break;
    default: console.log(key);}}

// a = boom, s = clap, d = hihat, f = kick, g = openhat, h = ride, j = snare, k = tink, l = tom
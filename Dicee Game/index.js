
//random Numbers
var randomNumber1 = getRandomInt(1,7);
var randomNumber2 = getRandomInt(1,7);

console.log(randomNumber1);
console.log(randomNumber2);

// Random Images
var img1 = "images/dice" + randomNumber1 + ".png";
var img2 = "images/dice" + randomNumber2 + ".png";


//change attribute img
document.querySelector(".img1").setAttribute("src",img1);
document.querySelector(".img2").setAttribute("src",img2);

//change title
var msg = "";

if(randomNumber1 > randomNumber2){
    msg = "🚩 Player 1 Wins!";
}else if(randomNumber2 > randomNumber1){
    msg = " Player 2 Wins! 🚩";
}else{
    msg = "Draw!";
}

document.querySelector("h1").innerHTML = msg



// Retorna un entero aleatorio entre min (incluido) y max (excluido)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}



let buttonColors = ["red", "blue", "green", "yellow"]

let userClickedPattern = []

let gamePattern = []


nextSequence()

// chech wich button is pressed
$(".btn").on("click",function(){
    var userChosenColor = $(this).attr("id")
    playSound(userChosenColor)
    userClickedPattern.push(userChosenColor)
    console.log(userClickedPattern)
})


function nextSequence(){

    var randomNumber = getRandomInt(0,4)

    var randomChosenColor = buttonColors[randomNumber]

    gamePattern.push(randomChosenColor)


    $("#"+randomChosenColor).fadeOut(100).fadeIn(100)

    playSound(randomChosenColor)
    
}


function playSound(name){
    const audio = new Audio("sounds/"+name+".mp3" );
    audio.play();
}



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
var p1Button = document.querySelector("#B1");
var p2Button = document.querySelector("#B2");
var resetButton   = document.querySelector("#reset");
var spanP1 = document.querySelector("#player1Display");
var spanP2 = document.querySelector("#player2Display");
var input = document.querySelector("input");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 7;
var winningDisplay = document.querySelector("#winno");


p1Button.addEventListener("click", function(){
    if(!gameOver){
    p1Score++;
    if(p1Score === winningScore){
    spanP1.classList.add("winner");
    gameOver = true;
    }
    spanP1.textContent = p1Score;
}
    })
                                                

p2Button.addEventListener("click", function(){
    if(!gameOver){
    p2Score++;
    if(p2Score === winningScore){
        spanP2.classList.add("winner");
        gameOver= true;
    }
    spanP2.textContent = p2Score;
    }
})

resetButton.addEventListener("click", function(){
  reset();
})

function reset(){
    p1Score = 0;
    p2Score = 0;
    spanP1.textContent = 0;
    spanP2.textContent = 0;
    spanP1.classList.remove("winner");
    spanP2.classList.remove("winner");
    gameOver=false;
}

input.addEventListener("change", function(){
    if(input.value >0){
    winningScore = Number(input.value);
    winningDisplay.textContent = winningScore;
    reset();
    }
    else{
        alert("error");
        reset();
    }
})




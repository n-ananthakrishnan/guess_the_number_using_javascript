var guessnumber=document.getElementById("guessnumber")
var result=document.getElementById("result")
var score=document.getElementById("score")
var tscore=10
var random=Math.floor(Math.random()*10)+1
function check(){
    if(random==(guessnumber.value)){
        
        result.textContent="You are Right!!"
        alert("You've won!!")
    }
    else{
        tscore=tscore-1
        if(tscore>=0){
            score.textContent="Your Current Score is "+tscore
            result.textContent="You are Wrong!!"
        }
        else if(tscore<0){
            result.textContent="Game Over 🥲!!"
        }
    }
}
function diceRoll(){
    let roll=document.getElementById("dice");
    let randnum=Math.floor(Math.random()*6)+1;
    let randimg="./images/dice"+randnum+".png";
    roll.setAttribute("src",randimg);
    addScore(randnum);
}
var greensq=1;
function addScore(randnum){
    document.querySelector("h1").innerHTML="Come Play! ";
    document.querySelector(".block"+greensq).classList.remove("green");
    greensq+=randnum;
    if (greensq > 64) {
        greensq = 64;
    }
    if( document.querySelector(".block"+greensq).classList.contains("red")){
        greensq=1;
        document.querySelector("h1").innerHTML="Try Again ";
    }

    document.querySelector(".block"+greensq).classList.add("green");

    if (greensq===64){
        document.querySelector("h1").innerHTML="You Won!";
        document.querySelector("button").disabled=true;
    }
}

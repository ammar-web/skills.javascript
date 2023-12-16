var randomnumber1 = Math.floor(Math.random()* 6) +1;

var randomDiceimage1= "images/dice" + randomnumber1 + ".png";

 document.querySelectorAll("img")[0].setAttribute("src",randomDiceimage1);


 var randomnumber2 = Math.floor(Math.random()* 6) +1;

var randomDiceimage2= "images/dice" + randomnumber2 + ".png";

 document.querySelectorAll("img")[1].setAttribute("src",randomDiceimage2);

 if (randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player1 Wins 🎌"
 }
 else if (randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML=" 🎌 Player2 Wins"
}

else if (randomnumber2==randomnumber1){
    document.querySelector("h1").innerHTML=" 👏 It's a Draw!"
}

 



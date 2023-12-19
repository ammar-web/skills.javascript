###  DRUM KIT WEBSITE JAVA SCRIPT FILE ###


var drumbeats=document.querySelectorAll(".drum").length

 for (var i=0;i<drumbeats;i++){


document.querySelectorAll(".drum")[i].addEventListener("click",sounds)
function sounds() {
   
    alert("i got clicked") 

}
}
   




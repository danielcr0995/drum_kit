var numberButton=document.querySelectorAll('.drum').length;

for (var i =0; i<numberButton;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",click);

}



function click(){

    var buttonText=this.innerHTML;
    // console.log(buttonText)
    switch (buttonText){
        case "w":
            var tom1= new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var crash= new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "s":
            var kick= new Audio("./sounds/kick.mp3");
            kick.play();
            break;

        case "d":
            var tom2= new Audio("./sounds/tom-2.mp3");
            tom1.play();
            break;
        case "j":
            var tom3= new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "k":
            var snare= new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "l":
            var tom4= new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        default: console.log(buttonText)
    }
    var audio= new Audio("./sounds/tom-1.mp3");
    audio.play();
    this.style.color="white";
}
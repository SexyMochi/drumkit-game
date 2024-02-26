for(var i = 0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}

function handleClick() {
    var htmlInner = this.innerHTML;
    theKey(htmlInner);
}

document.addEventListener("keydown", function(event){
    var passKey = event.key;
    theKey(passKey);
});

function theKey (keyyy){
    switch (keyyy) {
        case "w":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            buttonAnimation(keyyy);
        break;
    
        case "a":
            var kickBass = new Audio("./sounds/kick-bass.mp3");
            kickBass.play();
            buttonAnimation(keyyy);
        break;
        
        case "s":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            buttonAnimation(keyyy);
        break;
        
        case "d":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            buttonAnimation(keyyy);
        break;
        
        case "j":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            buttonAnimation(keyyy);
        break;
        
        case "k":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            buttonAnimation(keyyy);
        break;
        
        case "l":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            buttonAnimation(keyyy);
        break;
    
        default: console.log(keyyy);
    }
}

function buttonAnimation(currentKey){
    var position = document.querySelector("."+currentKey);
    position.classList.add("pressed");

    setTimeout(function(){
        position.classList.remove("pressed");
    }, 100);
}
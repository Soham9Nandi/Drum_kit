let buttons = document.querySelectorAll(".drum");
buttons.forEach(element => {
    element.addEventListener("click",function(){
        playSound(this.innerHTML);
        flashButton(this.innerHTML);
    });
});

document.addEventListener("keydown",function(pressedKey){
    playSound(pressedKey.key);
    flashButton(pressedKey.key);
})

const playSound = (buttonPressed) => {
    switch(buttonPressed){
    case "w":
        let tom1 = new Audio("./sounds/tom-1.mp3");
        tom1.play();
        break;
    case "a":
        let tom2 = new Audio("./sounds/tom-2.mp3");
        tom2.play();
        break;
    case "s":
        let tom3 = new Audio("./sounds/tom-3.mp3");
        tom3.play();
        break;
    case "d":
        let tom4 = new Audio("./sounds/tom-4.mp3");
        tom4.play();
        break;
    case "j":
        let snare = new Audio("./sounds/snare.mp3");
        snare.play();
        break;
    case "k":
        let crash = new Audio("./sounds/crash.mp3");
        crash.play();
        break;
    case "l":
        let kick = new Audio("./sounds/kick-bass.mp3");
        kick.play();
        break;
    default:
        console.log(buttonPressed);    
    }
}
const flashButton = (buttonPressed) =>{
    let buttonToFlash = document.querySelector(`.${buttonPressed}`);
    buttonToFlash.classList.add("pressed");
    setTimeout(() => {
        buttonToFlash.classList.remove("pressed");
    }, 200);
}
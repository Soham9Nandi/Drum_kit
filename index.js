let buttons = document.querySelectorAll(".drum");
buttons.forEach(element => {
    element.addEventListener("click",alertButton);
});
function alertButton(){
    alert("The button was clicked.")
}
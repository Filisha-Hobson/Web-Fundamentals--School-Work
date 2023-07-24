// This function removes the button donate by applying the word "this" to be specific on what to hide and the button.remove function.//

function hide(button) {
    button.remove()
}

//Created these variables and function to increase the number of pettings. i used document.query selector to select each container differently by using ids.//

var touchincrease = 3;
var touchAdd = document.querySelector("#reward");

function IncreasePetTouching() {
    touchincrease++;
    touchAdd.innerText = touchincrease + " petting(s)";
}

var pettingincrease = 5;
var pettingAdd = document.querySelector("#gift");

function IncreasePettingNum() {
    pettingincrease++;
    pettingAdd.innerText = pettingincrease + " petting(s)";
}

var raisepettings = 8;
var Addpettings = document.querySelector("#present");

function IncreaseNumofPettings() {
    raisepettings++;
    Addpettings.innerText = raisepettings + " petting(s)";
}

//i tried to attempt the alert to choose for each option but it can only do it for all//
let select = document.querySelector('select')
let valueOption = document.querySelector(value)

function selectAlert(){
    alert("You are looking for a:dog")
}

select.addEventListener('select', selectAlert )






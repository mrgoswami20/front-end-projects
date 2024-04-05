const length = document.querySelector("[data-passwordLength]");
const slider = document.querySelector("[data-inputSlider]");

let passwordLength = 15;
handleSlider();

function handleSlider(){
    slider.value = passwordLength;
    length.innerText = passwordLength;
}
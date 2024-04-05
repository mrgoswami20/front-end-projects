var bulb = document.querySelector(".bulb");
var button = document.querySelector(".btn");

var flag = 0;

button.addEventListener("click", function(){
    if(flag == 0){
        bulb.style.backgroundColor = "yellow";
        bulb.style.border = "1px solid #b6b3b3";
        button.innerHTML = "ON";
        flag = 1;
    }
    else {
        bulb.style.backgroundColor = "#b6b3b3";
        bulb.style.border = "1px solid #b6b3b3";
        button.innerHTML = "OFF";
        flag = 0;
    }
})
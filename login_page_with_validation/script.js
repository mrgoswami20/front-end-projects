let usernameRef = document.getElementById("username");
let passwordRef = document.getElementById("password");
let submitBtn = document.getElementById("submit");
let messageref = document.getElementById("message-ref");

let isUsernameValid = () => {
    const usernameRegex =/^[a-zA-Z][a-zA-Z0-9]{3,32}/gi;
    return usernameRegex.test(usernameRef.value);
};

let isPasswordValid = () => {
    const passwordRegex =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    return passwordRegex.test(passwordRef.value);
};

usernameRef.addEventListener("input", () =>{
    if(!isUsernameValid()){
        messageref.style.visibility = "hidden";
        usernameRef.style.cssText = "border-color: #fe2e2e; background-color: #ffc2c2";
    }else{
        usernameRef.style.cssText = "border-color: #34bd34; background-color: #c2ffc2";
    }
});

passwordRef.addEventListener("input",() =>{
    if(!isPasswordValid()){
        messageref.style.visibility = "hidden";
        passwordRef.style.cssText = "border-color: #fe2e2e; background-color: #ffc2c2";
    } else{
        passwordRef.style.cssText = "border-color: #34bd34; background-color: #c2ffc2"
    }
});

submitBtn.addEventListener("mouseover", () => {
    if(!isUsernameValid() || !isPasswordValid()){
        let containerRect = document.querySelector(".container").getBoundingClientRect();
        let submitRect = submitBtn.getBoundingClientRect();
        let offset = submitRect.left - containerRect.left;
        console.log(offset);
        if(offset <= 100){
            submitBtn.style .transform = "translateX(16.25em)";
        }
        else{
            submitBtn.style.transform = "translateX(0)";
        }
    }
});

submitBtn.addEventListener("click",() =>{
    messageref.style.visibility = "visible";
})
const container = document.getElementById("container");
const userInput = document.querySelector(".inputBox input");
const generateBtn = document.querySelector(".inputBox button");
const qrImg = document.querySelector(".qr-code img");
let preValue;

generateBtn.addEventListener("click", () => {

    //extra spaces are also taken into care
    let qrValue = userInput.value.trim(); 
    
    //checking if user entered value is empty
    if (!qrValue || preValue === qrValue) return; 

    preValue = qrValue;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        container.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

userInput.addEventListener("keyup", () => {
    if (!userInput.value.trim()) {
        container.classList.remove("active");
        preValue = "";
    }
});
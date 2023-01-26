const container = document.getElementById("container");
const userInput = document.querySelector(".inputBox input");
const generateBtn = document.querySelector(".inputBox button");
const qrImg = document.querySelector(".qr-code img");
let preValue;

generateBtn.addEventListener("click", () => {

    let qrValue = userInput.value.trim();
    if (!qrValue || preValue === qrValue) return; //checking if user entered value is empty

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
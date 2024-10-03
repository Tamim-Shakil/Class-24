// Selectors
const generatePinBtn = document.querySelector(".generate-btn");
const generatedPin = document.querySelector(".generatedPin");
const showKeyPadValue = document.querySelector(".ShowValue");
const removeBtn = document.getElementById("removeBtn");
const submitBtn = document.querySelector(".submit-btn");
const wrongPinNotification = document.querySelector(".wrong-pin");
const correctPinNotification = document.querySelector("correct-pin");
const tryLeft = document.getElementById("tryLeft");
const actions = document.querySelector(".action-left");


// Generating 4 digits Pin
function generatePin() {
    let randomNumber = Math.floor(Math.random() * 9000 + 1000);
    generatedPin.value = randomNumber;
    generatePinBtn.disabled = true;
    // generatePinBtn.computedStyleMap.backgroundColor = "green";
}
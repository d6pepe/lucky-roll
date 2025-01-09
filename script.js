// Get DOM elements
const landingPage = document.getElementById("landing-page");
const gameStep = document.getElementById("game-step");
const finalStep = document.getElementById("final-step");
const finalMessage = document.getElementById("final-message");
const codeInput = document.getElementById("code-input");
const codeSubmit = document.getElementById("code-submit");
const animations = document.querySelectorAll(".animation");
const finalInput = document.getElementById("final-input");
const finalSubmit = document.getElementById("final-submit");

let correctCode = "12345"; // Change this to your desired code
let animationClicks = 0;

// Code submission logic
codeSubmit.addEventListener("click", () => {
  if (codeInput.value === correctCode) {
    landingPage.style.display = "none";
    gameStep.style.display = "block";
  } else {
    alert("Incorrect code. Try again!");
  }
});

// Dice animation clicks
animations.forEach((animation) => {
  animation.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1; // Random number 1-6
    alert(`You rolled: ${randomNumber}`);
    animationClicks++;

    if (animationClicks === 3) {
      gameStep.style.display = "none";
      finalStep.style.display = "block";
    }
  });
});


// Elements
const finalStep = document.getElementById("final-step");
const finalMessage = document.getElementById("final-message");
const finalSubmit = document.getElementById("final-submit");

// Final text submission event listener
finalSubmit.addEventListener("click", () => {
  finalStep.style.display = "none";  // Hide the final input form
  finalMessage.style.display = "block";  // Show the "Interaction Complete!" message
});

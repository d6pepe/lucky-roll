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


document.addEventListener("DOMContentLoaded", () => {
  const landingPage = document.getElementById("landing-page");
  const gameStep = document.getElementById("game-step");
  const finalStep = document.getElementById("final-step");
  const finalMessage = document.getElementById("final-message");

  const codeInput = document.getElementById("code-input");  // Input field for the code
  const finalInput = document.getElementById("final-input");  // Input field for the final text

  let correctCode = "12345";  // Example correct code
  
// **Code Input Submission (Step 1)**
  codeInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {  // Check if Enter key was pressed
      event.preventDefault();  // Prevent default form submission
      if (codeInput.value === correctCode) {
        console.log("Correct code entered!");
        landingPage.style.display = "none";  // Hide landing page
        gameStep.style.display = "block";  // Show game step
      } else {
        alert("Incorrect code. Try again!");  // Show error if code is wrong
      }
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

// **Final Text Submission (Step 3)**
  finalInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {  // Check if Enter key was pressed
      event.preventDefault();  // Prevent default form submission
      console.log("Final text submitted with Enter key");
      finalStep.style.display = "none";  // Hide the final step input form
      finalMessage.style.display = "block";  // Show the "Interaction Complete!" message
    }
  });
});

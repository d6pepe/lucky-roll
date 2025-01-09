document.addEventListener("DOMContentLoaded", () => {
  const landingPage = document.getElementById("landing-page");
  const gameStep = document.getElementById("game-step");
  const finalStep = document.getElementById("final-step");
  const finalMessage = document.getElementById("final-message");

  const codeInput = document.getElementById("code-input");  // Input for code
  const finalInput = document.getElementById("final-input");  // Input for final text

  let correctCode = "12345";  // Example correct code
  let animationClicks = 0;

  // **Code Input Submission (Step 1)**
  codeInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {  // Check if Enter key was pressed
      event.preventDefault();  // Prevent form submission
      if (codeInput.value === correctCode) {
        console.log("Correct code entered!");
        landingPage.style.display = "none";  // Hide landing page
        gameStep.style.display = "block";  // Show game step
      } else {
        alert("Incorrect code. Try again!");  // Error if code is wrong
      }
    }
  });

  // **Game Step: Animation Clicks**
  const animations = document.querySelectorAll(".animation");
  animations.forEach((animation) => {
    animation.addEventListener("click", () => {
      const randomNumber = Math.floor(Math.random() * 6) + 1;  // Random number between 1-6
      alert(`You rolled: ${randomNumber}`);
      animationClicks++;
      if (animationClicks === 3) {
        gameStep.style.display = "none";  // Hide dice animations
        finalStep.style.display = "block";  // Show final input form
      }
    });
  });

  // **Final Text Submission (Step 3)**
  finalInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {  // Check if Enter key was pressed
      event.preventDefault();  // Prevent form submission
      console.log("Final text submitted with Enter key");
      finalStep.style.display = "none";  // Hide final step input form
      finalMessage.style.display = "block";  // Show the "Interaction Complete!" message
    }
  });
});

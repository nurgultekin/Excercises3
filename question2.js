// 2. (3p) Skapa ett inputfält och en knapp på html-sidan. När man klickar på
// knappen ska det man skrev i input-fältet synas nedanför input-fältet i en div.

// question2.js

const inputField = document.getElementById("input");
const button = document.getElementById("btn");
const resultDiv = document.getElementById("result");

button.addEventListener("click", function () {
  const inputValue = inputField.value;

  // Check if the input is not empty
  if (inputValue.trim() !== "") {
    // Create a new div element
    const newDiv = document.createElement("div");

    // Set the text content of the new div
    newDiv.textContent = inputValue;

    // Append the new div to the resultDiv
    resultDiv.appendChild(newDiv);

    // Clear the input field
    inputField.value = "";
  }
});

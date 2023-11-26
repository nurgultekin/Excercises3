// 4.1 (3p) Skriv kod som lägger till 10 button element till html-sidan.
// Varje button ska innehålla en klass "primary"
// och texten "Button" + talet 1 till 10.
// Så här: <button class="primary">Button1</button> <button class="primary">Button2</button> ...
// Koden kan använda en for-loop



const buttonsContainer = document.getElementById("buttons-container");

for (let i = 1; i <= 10; i++) {
  const button = document.createElement("button");
  button.textContent = `Button${i}`;
  button.className = "primary";

// 4.2 (2p) Lägg till addEventlistener på varje button.
// Vid eventet "click" på button ska klassen ändras till "secondary"

  button.addEventListener("click", function() {
    button.classList.remove("primary");
    button.classList.add("secondary");
  });

  buttonsContainer.appendChild(button);
}

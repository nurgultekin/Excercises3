// 3. Skapa en div med ett B. Så här: <div>B</div>
// Lägg det mellan A och C på html-sidan.


const newDiv = document.createElement("div");
newDiv.textContent = "B";
document.getElementById("my-element").insertBefore(newDiv, document.getElementById("C"));
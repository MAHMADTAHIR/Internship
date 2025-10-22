const display = document.getElementById("display");
const button = document.querySelectorAll("button");
console.log("button log", button)

let currentInput = "";

button.forEach(button => {
    button.addEventListener("click", () =>{
        const value = button.textContent;


    if (value === "C") {
        currentInput = "";
        display.textContent = "0"
    } else if (value === "=") {
        try {
            currentInput = eval(currentInput);
            display.textContent = currentInput;
        } catch (err) {
            display.textContent = currentInput;
        }
    } else {
        currentInput += value;
        display.textContent = currentInput;
    }
    });
});
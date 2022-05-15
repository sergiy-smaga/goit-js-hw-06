const inputRef = document.querySelector("#name-input");
const spanRef = document.querySelector("#name-output");

function inputHandler() {
    spanRef.textContent = inputRef.value
    if (inputRef.value === "") {
        spanRef.textContent = "Anonymous";
    }
};

inputRef.addEventListener("input", inputHandler);
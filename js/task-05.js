const inputRef = document.querySelector("#name-input");
const spanRef = document.querySelector("#name-output");

function inputHandler() {
    spanRef.textContent = inputRef.value
};

inputRef.addEventListener("input", inputHandler);
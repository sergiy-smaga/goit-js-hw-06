const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const valueSpan = document.querySelector("#value");

let counterValue = 0;

function decrementHandler() {
    counterValue -= 1;
    valueSpan.textContent = counterValue;
};
function incrementHandler() {
    counterValue += 1;
    valueSpan.textContent = counterValue;
};

btnDecrement.addEventListener("click", decrementHandler);
btnIncrement.addEventListener("click", incrementHandler);
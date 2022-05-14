const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

const sizeHandler = (event) => {
    span.style.fontSize = `${event.currentTarget.value}px`;

};

input.addEventListener("input", sizeHandler);
document.addEventListener("DOMContentLoaded", sizeHandler); // не работает, поскольку в разметке не указан параметр value поля input по умолчанию
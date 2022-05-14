function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  body: document.querySelector("body"),
  color: document.querySelector(".color"),
  btn: document.querySelector(".change-color"),
}

function colorChanger() {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.color.textContent = refs.body.style.backgroundColor;
};

refs.btn.addEventListener("click", colorChanger);
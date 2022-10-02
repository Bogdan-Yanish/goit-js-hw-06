function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");
const body = document.querySelector("body");

changeColorBtn.addEventListener('click', onChangeColor);

function onChangeColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorValue.textContent = randomColor;
}





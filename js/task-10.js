function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumber = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const box = document.querySelector("#boxes");

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
    const newBox = [];

  for (let i = 0; i < inputNumber.value; i += 1) {
    const newDiv = document.createElement("div");
    
    newDiv.style.width = String(30 + 10 * i) + 'px';
    newDiv.style.height = String(30 + 10 * i) + 'px';
    newDiv.style.backgroundColor = getRandomHexColor();

    // const newDiv = `<div style ="
    // background-color: ${getRandomHexColor()};
    // width: ${30 + i * 10}px; 
    // height: ${30 + i * 10}px
    // "></div>`

    newBox.push(newDiv);    
  }

  box.append(...newBox);

  // box.insertAdjacentHTML("beforeend", newBox.join(""));
}

function destroyBoxes() {
  box.innerHTML = "";
}


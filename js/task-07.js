
const inputRange = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

text.style.fontSize = `${inputRange}px`;

inputRange.addEventListener('input', onChangeSizeText);

function onChangeSizeText(event) {
    text.style.fontSize = `${event.currentTarget.value}px`;
}


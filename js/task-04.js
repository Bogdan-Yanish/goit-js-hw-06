
const counterValue = {
    value: 0,

    increment() {
      this.value += 1;
    },

    decrement() {
      this.value -= 1;
    },
  };
  

const decrementBtn = document.querySelector("[data-action=decrement]");
const incrementBtn = document.querySelector("[data-action=increment]");
const counter = document.querySelector("#value");

decrementBtn.addEventListener('click', onDecrementBtnClick);

function onDecrementBtnClick() {
    counterValue.decrement();
    counter.textContent = counterValue.value;
};

incrementBtn.addEventListener('click', onIncrementBtnClick);

function onIncrementBtnClick() {
    counterValue.increment();
    counter.textContent = counterValue.value;
}











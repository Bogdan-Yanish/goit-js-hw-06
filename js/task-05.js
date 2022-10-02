
const inputNameRef = document.querySelector('#name-input');
const outputNameRef = document.querySelector('#name-output');

inputNameRef.addEventListener('input', (event)=> {
    const value = event.currentTarget.value
    outputNameRef.textContent = value
    ? value
    : 'Anonymous';

})
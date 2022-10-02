
const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onOutputBlur);

// ========= First variant. Work!!! =====================================

function onOutputBlur(event) {
    const dataLength = Number(inputRef.dataset.length);

    inputRef.classList.remove("valid");
    inputRef.classList.remove("invalid");

    if (dataLength === event.currentTarget.value.length) {
    inputRef.classList.add("valid");
   
    } else {
    inputRef.classList.add("invalid");
    
    }
};

// ========= Second variant. Work!!! ============================================

// function onOutputBlur(event) {
//     const { dataset, value } = event.currentTarget;
//     const dataLength = Number(dataset.length);
  
//     if (dataLength === value.length) {
//       event.target.classList.add("valid");
//       event.target.classList.remove("invalid");
//     } else {
//       event.target.classList.add("invalid");
//       event.target.classList.remove("valid");
//     }
//   }
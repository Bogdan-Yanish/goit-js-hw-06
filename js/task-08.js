
const form = document.querySelector(".login-form");

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
    event.preventDefault();
    const {
        elements: { email, password }
      } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        alert("Please fill in all the fields!");
        return;
    }

    const userData = {
        Email: email.value,
        Password: password.value,
      };
    
    console.log(userData);
    event.currentTarget.reset();
}

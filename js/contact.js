const form = document.querySelector('#form');
const name = document.querySelector("#name")
const email = document.querySelector("#email")
const message = document.querySelector("#message")

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const nameVal = name.value;
    const emailVal = email.value;
    const messageVal = message.value;
    alert(`
    Name: ${nameVal}
    Email: ${emailVal}
    Message: ${messageVal}
    `);
    form.reset();
})
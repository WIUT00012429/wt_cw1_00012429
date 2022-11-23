const form = document.querySelector('#form');
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = $("#name").value;
    const email = $("#email").value;
    const message = $("#message").value;
    alert(`
    Name: ${name}
    Email: ${email}
    Message: ${message}
    `);
    form.reset();
})
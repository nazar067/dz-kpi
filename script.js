document.getElementById('registrationForm').addEventListener('submit', function(event) {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!firstName || !lastName || !email || !password) {
        alert('Complete all fields.');
        event.preventDefault();
    } else {
        alert('Form sent!');
    }
});

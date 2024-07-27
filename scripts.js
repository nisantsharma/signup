// scripts.js
document.getElementById('email').addEventListener('input', validateEmail);
document.getElementById('password').addEventListener('input', validatePassword);

function validateEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailSuccess = document.getElementById('emailSuccess');
    if (email.length > 3 && email.includes('@') && email.includes('.')) {
        emailError.textContent = '';
        emailSuccess.textContent = 'All good to go!';
        emailSuccess.style.color = 'green';
    } else {
        emailError.textContent = 'Email must be more than 3 characters and contain @ and a .';
        emailError.style.color = 'red';
        emailSuccess.textContent = '';
    }
}

function validatePassword() {
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    const passwordSuccess = document.getElementById('passwordSuccess');
    if (password.length > 8) {
        passwordError.textContent = '';
        passwordSuccess.textContent = 'All good to go!';
        passwordSuccess.style.color = 'green';
    } else {
        passwordError.textContent = 'Make sure password is more than 8 characters.';
        passwordError.style.color = 'red';
        passwordSuccess.textContent = '';
    }
}

function handleSubmit() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const emailError = document.getElementById('emailError').textContent;
    const passwordError = document.getElementById('passwordError').textContent;

    if (!emailError && !passwordError) {
        if (confirm('Are you sure you want to submit?')) {
            alert('Successful signup!');
            document.getElementById('signupForm').reset();
            document.getElementById('emailSuccess').textContent = '';
            document.getElementById('passwordSuccess').textContent = '';
        }
    } else {
        alert('Please fix the errors before submitting.');
    }
}

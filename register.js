document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('registerForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const lastname = document.getElementById('lastname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;

        const user = { name, lastname, email, password, gender };

        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem(`user_${email}`, JSON.stringify(user));

        window.location.href = '/index.html';
    });
});
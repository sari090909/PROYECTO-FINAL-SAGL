document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('registerForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const lastname = document.getElementById('lastname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;

        const user = { name, lastname, email, password, gender };
        const users = JSON.parse(localStorage.getItem('users')) || [];

        users.push(user);

        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = '/index.html';
    });
});

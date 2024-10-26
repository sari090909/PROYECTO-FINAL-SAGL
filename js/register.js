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

        // Retrieve the current users array or initialize a new one
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Add the new user to the users array
        users.push(user);

        // Update localStorage with the new users array
        localStorage.setItem('users', JSON.stringify(users));

        // Automatically log in the user by setting a current user
        localStorage.setItem('currentUser', JSON.stringify(user));

        // Redirect to the landing page
        window.location.href = '/index.html';
    });
});

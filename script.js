// Registration
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('register-username').value;
    var password = document.getElementById('register-password').value;
    localStorage.setItem(username, password);
    alert('Registration successful');
    window.location.href = 'index.html';
});

// Login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;
    var storedPassword = localStorage.getItem(username);
    if (password === storedPassword) {
        window.location.href = 'intro.html';
    } else {
        alert('Invalid credentials');
    }
});

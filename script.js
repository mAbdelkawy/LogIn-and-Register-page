function register() {
    const name = document.getElementById("register-name").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    
    if (!name || !email || !password) {
        alert("All fields are required!");
        return;
    }
    
    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    if (users.some(user => user.email === email)) {
        alert("Email is already registered!");
        return;
    }
    
    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful! You can now log in.");
    window.location.href = "login.html";
}

function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    
    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    let user = users.find(user => user.email === email && user.password === password);
    
    if (!user) {
        alert("Invalid email or password!");
        return;
    }
    
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    alert("Login successful! Welcome, " + user.name);
}
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    if (email === "test@example.com" && password === "Password123") {
        alert("Login Successful!");
        window.location.href = "welcome.html"; // Replace with your welcome/dashboard page
    } else {
        alert("Invalid email or password. Please try again.");
    }
});

function createAccount() {
    alert("Redirecting to account creation...");
    window.location.href = "registration.html"; // Link to your registration page
}

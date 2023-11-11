function registerUser() {
    // Get input values
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();
    
    // Get the div for displaying validation messages
    // const validationMessage = document.getElementById("validationMessage");
    // validationMessage.innerHTML = ""; // Clear previous messages

    // Regular expressions for password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Perform client-side validation
    if (email === "" || username === "" || password === "" || confirmPassword === "") {
        // validationMessage.innerHTML = "All fields are required.";
        alert("All fields are required.");
    } else if (username.length < 3) {
        // validationMessage.innerHTML = "Username must be at least 3 characters long.";
        alert("Username must be at least 3 characters long.");
    } else if (!passwordRegex.test(password)) {
        // validationMessage.innerHTML = "Password must be at least 8 characters long and include at least one uppercase letter, one special symbol, and one number.";
        alert("Password must be at least 8 characters long and include at least one uppercase letter, one special symbol, and one number.");
    } else if (password !== confirmPassword) {
        // validationMessage.innerHTML = "Password and Confirm Password do not match.";
        alert("Password and Confirm Password do not match..");
    } else {
        // Registration successful - you can submit the form or take other actions here
        alert("Registration successful!");
        // Reset form or redirect the user to another page
    }
}
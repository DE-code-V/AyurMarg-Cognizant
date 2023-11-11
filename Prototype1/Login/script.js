function loginUser() {
    // Get input values
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    
    // Get the div for displaying validation messages
    const validationMessage = document.getElementById("validationMessage");
    validationMessage.innerHTML = ""; // Clear previous messages

    // Perform client-side validation
    if (email === "" || password === "") {
        validationMessage.innerHTML = "Both Email and Password are required.";
    } else {
        // Login successful - you can submit the form or take other actions here
        alert("Login successful!");
        // Reset form or redirect the user to another page
    }
}

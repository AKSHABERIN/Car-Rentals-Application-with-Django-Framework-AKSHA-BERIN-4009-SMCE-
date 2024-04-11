function isValidUsername(username) {
    // Username should contain only letters, numbers, underscores, and dots
    var regex = /^[a-zA-Z0-9_\.]+$/;
    return regex.test(username);
}

function isValidPassword(password) {
    // Password should be at least 8 characters long and contain at least one digit, one uppercase letter, one lowercase letter, and one special character
    var regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=.{8,})/;
    return regex.test(password);
}

// Example usage:
var username = "john_doe123";
var password = "P@ssw0rd";

if (isValidUsername(username)) {
    console.log("Username is valid.");
} else {
    console.log("Invalid username.");
}

if (isValidPassword(password)) {
    console.log("Password is valid.");
} else {
    console.log("Invalid password.");
}

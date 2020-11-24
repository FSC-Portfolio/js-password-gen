// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var passwordGen = {
        pwLength: 8,
        pwLower: true,
        pwUpper: true,
        pwNumeric: true,
        pwSpecial: true,
    }
    console.log("generated babee");

    prompt("Enter password length: ");  // Length of password 8 - 128 characters
    prompt("Lowercase: ")  // Use lowercase characters
    prompt("Uppercase: ")  // Use uppercase characters
    prompt("Numeric: ")  // Use numeric characters
    prompt("Special: ")  // Use special characters

    // Return the generated password for display
    return("okies");
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");
PWORD_LENGTH_MIN = 8;
PWORD_LENGTH_MAX = 128;

function generatePassword() {
    // Setup an object to make it easier to work with.
    var passwordGen = {
        // Establish variables and set defaults.
        pwLength: 8,
        pwLower: true,
        pwUpper: true,
        pwNumeric: true,
        pwSpecial: true,
    }
    console.log("generated babee");

    var tempLength = prompt("Enter password length between "
        + PWORD_LENGTH_MIN + " and "
        + PWORD_LENGTH_MAX + " (currently " + passwordGen.pwLength + "): ");

    // validate tempLengths

    // Get the parameters from the user and update defaults.
    passwordGen.pwLower = confirm("User lowercase characters? ("+ passwordGen.pwLower + ")");
    passwordGen.pwUpper = confirm("User uppercase characters? ("+ passwordGen.pwUpper + ")");
    passwordGen.pwNumeric = confirm("User numeric characters? ("+ passwordGen.pwNumeric + ")");
    passwordGen.pwSpecial = confirm("User special characters? ("+ passwordGen.pwSpecial + ")");

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

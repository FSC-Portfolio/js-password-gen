// Assignment Code
var generateBtn = document.querySelector("#generate");
PWORD_LENGTH_MIN = 8;
PWORD_LENGTH_MAX = 128;
SELECTION_RANGES = [
    [97, 122],  // Lower
    [65, 90],  // Upper
    [48, 57],  // Numeric
    [[33, 47], [58, 64], [91, 96]],  // Specials
]

// Ascii Table: https://www.ionos.com/digitalguide/server/know-how/ascii-codes-overview-of-all-characters-on-the-ascii-table/

function generatePassword() {
    // Set some character arrays
    var counter = 0;
    // Array to hold our selection pools.
    var selectionPool = [];
    // hold our parameters
    var pwParameters = [["lowercase", true], ["uppercase", true], ["numeric", true], ["special", true]];
    var pwLength = 8;
    var tempLength;
    var password = "";

    // Setup an object to use some internal functions.
    var passwordGen = {
        getLength: function () {
            return prompt("Enter password length between "
                + PWORD_LENGTH_MIN + " and "
                + PWORD_LENGTH_MAX + " (currently " + pwLength + "): ");
        }
    }

    // Collect and validate the password length.
    tempLength = passwordGen.getLength();

    // Cycle through until valid.
    while (!parseInt(tempLength) || parseInt(tempLength) < PWORD_LENGTH_MIN || parseInt(tempLength) > PWORD_LENGTH_MAX) {
        tempLength = passwordGen.getLength();
    }
    pwLength = tempLength;

    // Get the parameters from the user and update defaults.
    // TODO Add action for when user declines to use _any_ password parameters.
    var i=0;
    for (i=0; i < pwParameters.length; i++) {
        pwParameters[i][1] = confirm("Use "+ pwParameters[i][0] +" characters? ("+ pwParameters[i][1] +")");
        console.log(pwParameters[i][1]);
        // Add the corresponding random range to the selection pool.
        if (pwParameters[i][1]) {
            selectionPool.push(i);
        }
    }

    // Use the selection ranges to determine individual characters to password.
    while (counter < pwLength) {
        var arrayToUse;
        // Select the array to use. If there's only one, use it.
        if (selectionPool.length > 1 ) {
            arrayToUse = selectionPool[Math.floor(Math.random() * selectionPool.length)];
        } else {
            arrayToUse = selectionPool[0]
        }
        arrayToUse = SELECTION_RANGES[arrayToUse];

        // Check for multipart range (ie special characters). Extract a part at random to use.
        if ( Array.isArray(arrayToUse[0]) ) {
            arrayToUse = arrayToUse[Math.floor(Math.random() * arrayToUse.length)];
        }
        // Use the selected array to push a new character to the password array.
        var pwChar = Math.floor(Math.random() * (arrayToUse[1] - arrayToUse[0]) + arrayToUse[0])
        password += String.fromCharCode(pwChar);

        console.log(password);

        // Don't forget to increase the counter!
        counter++;
    }




    // does the range have additional ranges? Select which one to use at random also

    // Return the generated password for display
    // var okies = String.fromCharCode(34);
    return(password);
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

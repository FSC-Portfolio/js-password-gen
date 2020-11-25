// Assignment Code
var generateBtn = document.querySelector("#generate");
PWORD_LENGTH_MIN = 8;
PWORD_LENGTH_MAX = 128;
SELECTION_RANGES = [
    [48, 57],  // Numeric
    [97, 122],  // Lower
    [65, 90],  // Upper
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
    var password = [];

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
    var i=0;
    for (i=0; i < pwParameters.length; i++) {
        pwParameters[i][1] = confirm("Use "+ pwParameters[i][0] +" characters? ("+ pwParameters[i][1] +")");
        console.log(pwParameters[i][1]);
        // Add the corresponding random range to the selection pool.
        if (pwParameters[i][1]) {
            selectionPool.push(i);
        }
    }
    console.log(selectionPool);

    // Use the selection ranges to determine individual characters to password.
    // loop through x number of times

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
            console.log("IS ARR: ", arrayToUse.length);
            arrayToUse = arrayToUse[Math.floor(Math.random() * arrayToUse.length)];
        }

        console.log("ARR: ", arrayToUse);
        // Use the selected array to push a new character to the password array.
        var pwChar = Math.floor(Math.random() * (arrayToUse[1] - arrayToUse[0]) + arrayToUse[0])
        console.log("CHAR: ", pwChar);

        // console.log(arrayToUse);

        counter++;
    }




    // does the range have additional ranges? Select which one to use at random also

    // Return the generated password for display
    var okies = String.fromCharCode(34);
    // okies += String.fromCharCode(65 + 25);
    return(okies);
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

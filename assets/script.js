// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    console.log("clicked button.")

    // 1. prompt user for password criteria
    var passwordLen = window.prompt("Enter length of password using a number, 8 - 128.");
        // a. prompt can't be blank
    if(passwordLen === "") {
        window.alert("Must enter content, cannot leave blank!");
        return generatePassword();
    }
        // b. Password must be at or above 8 characters
    else if(passwordLen < 8) {
        window.alert("Password must not be less than 8 character! ");
        return generatePassword();
    }
        // c. Password must be at or below 128 characters
    else if(passwordLen > 128) {
        window.alert("Password must not have more than 128 character! ");
    }
    
        // d. asks user if they want upper case letters
    var passwordLetter = window.prompt("Do you want a capital letter, yes or no?");
    passwordLetter = passwordLetter.toUpperCase();
    if (!(passwordLetter === "YES" || passwordLetter === "NO")) {
        window.alert("Invalid response, Yes or No? ");
        console.log(passwordLetter)
    } 
        // e. asks user if they want special characters
    var passwordCharacters = window.prompt("Do you want special characters in your password?");
    passwordCharacters = passwordCharacters.toUpperCase();
    if (!(passwordCharacters === "YES" || passwordCharacters === "NO")) {
        window.alert("Invalid response, Yes or No?");
        console.log(passwordCharacters);
    }
    // f. generate password based on criteria

    // var numbers = "0123456789";
    // var letterLower = "abcdefghijklmnopqrstuvwzyz";
    // var specialChar = "!@#$%^&*()";
    // var capitalLetter = "ABCDEFGHIJKLMNOPQRSTUVWXWZ";
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = passwordLen;
    var password = "";
   
    //const criteria = [numbers, letterLower, specialChar, capitalLetter];
    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
        console.log(password);
    }
    document.getElementById("password").value = password;
    console.log("runs")

    // if statement with condition of choices
    // I for example numbers and lowercase
    // Inside the if staetment combine the numbers and the lower letter variables 
    // also inside the if statement make a for loop to randomly select from the new characters string var 
    // var passwordChriteria = [numbers, letterLower, specialChar, capitalLetter, password];
   
    // for (lowerCase = 'yes' && numbers === 'yes' && special === 'no') {
    //     console.log("read");
    //     add numbers and lowercase into one variable
    //     create a for loop to randomly select from that new variable
    // }



    // g. display password to page

    return password;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
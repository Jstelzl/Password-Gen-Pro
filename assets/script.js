// Assignment Cod
var generateBtn = document.querySelector("#generate");

// Gloabl variables
var numbers = "0123456789";
var letterLower = "abcdefghijklmnopqrstuvwzyz";
var specialChar = '"!@#$%^&*><+=()"';
var capitalLetter = "ABCDEFGHIJKLMNOPQRSTUVWXWZ";
console.log(specialChar[0]);


// Password criteria / generate function
function generatePassword() {
    console.log("generate password")
    var totalCharacters = "";
    var password = "";


    // 1. prompt user for password length
    var passwordLen = prompt("Enter length of password using a number, 8 - 128.");
        // a. prompt can't be blank
    if(passwordLen === "") {
        window.alert("Must enter content, cannot leave blank!");
    }
        // b. Password must be at or above 8 characters
    else if(passwordLen < 8) {
        window.alert("Password must not be less than 8 character! ");
    }
        // c. Password must be at or below 128 characters
    else if(passwordLen > 128) {
        window.alert("Password must not have more than 128 character! ");
    }
    
    // 2. asks user for password criteria
    
    // a. capital letter?
    var upperCase = confirm("Do you want capital letters in your password?");
    if (upperCase) {
        totalCharacters = totalCharacters + capitalLetter;
    }
    
    // b. lowercase letter?
    var lowerCase = confirm("Do you want lower case letters in your password?");
    if (lowerCase) {
        totalCharacters = totalCharacters + letterLower;
    }

    // c. special characters?
    var specialCharacters = confirm("Do you want special characters in your password?");
    if (specialCharacters) {
        totalCharacters = totalCharacters + specialChar;
    }
    
    // d. numbers?
    var nums = confirm("Do you want numbers in your password?");
    if (nums) {
        totalCharacters = totalCharacters + numbers;
    }
    console.log(totalCharacters);

    // apply requested criteria through for loop and randomize
    for (var i = 0; i < passwordLen; i++) {
        var randomNumber = Math.floor(Math.random() * totalCharacters.length);
        password += totalCharacters[randomNumber];
        console.log(password);
    }
    document.getElementById("password").value = password;

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

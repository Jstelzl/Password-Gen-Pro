// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    console.log("clicked button.")

    // 1. prompt user for password criteria
    var passwordLen = window.alert("Passowrd must consist of between 8 and 128 character. It must contain at least 1 upper case letter, 1 lowercase letter, special characters, and numaric values.");
    window.prompt("Enter length of password using a number, 8 - 128.");

        // a. password length must be 8 - 128
    if(passwordLen == "") {
        window.alert("Must enter content, cannot leave blank!");
        console.log("test");
        return generatePassword();
    }
    else if(passwordLen < 8) {
        window.alert("Password must be more than 8 character! ");
        
        return generatePassword();
    }
    else if(passwordLen > 128) {
        window.alert("Password must not have less than 128 character! ");
        return generatePassword();
    }
    
    // b. must contain: lowercase, upercase, number, special character
    let capitalLeters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    window.alert("Now choose a capital letter for your password, click ok to continue. ");
    var passwordCriteria = window.prompt("Enter an upper case letter");
    if (passwordCriteria == capitalLeters) {
        console.log("yay");
    } 
    else {
        window.alert(" Password criteria not met, try again! ");
        console.log('fail');
        
    }  
     // 2. validate input

    // 3. generate password based on criteria

    // 4. display password to page

    return "Your secure password";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
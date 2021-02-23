// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var length = Number(prompt("How many characters would you like your password to be? (Please choose between 8-128 characters.)"));

  if (length < 8 || length > 128) {
    return "Invalid length. Try again with 8 - 128";
  }

  var useUppercase = confirm ("Would you like to add uppercase letters?");
  var useLowercase = confirm ("Would you like to add lowercase letters?");
  var useSpecialChar = confirm ("Would you like add special characters?");
  var useNumeric = confirm("Would you like to add numbers?")


  var generatedPassword

  function declareLowercase() {
    var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  }
  function declareUppercase() {
    var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  function declareNumeric() {
    var numericChar = "1234567890";
  }
  function declareSpecialChar() {
    var specialChar = "!@#$%^&*";
  }
  declareLowercase()
  declareUppercase()
  declareNumeric()
  declareSpecialChar()
  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}




generateBtn.addEventListener("click", writePassword);




















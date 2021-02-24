var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var lowercaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numericChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+'];
  var length = Number(prompt("How many characters would you like your password to be? (Please choose between 8-128 characters.)"));

  if (length < 8 || length > 128) {
    return "Invalid length. Try again with 8 - 128";
  }

  alert("Great! Your password will have " + length + " characters.");

  var useUppercase = confirm ("Would you like to add uppercase letters?");
  var useLowercase = confirm ("Would you like to add lowercase letters?");
  var useSpecialChar = confirm ("Would you like add special characters?");
  var useNumeric = confirm("Would you like to add numbers?")
   
  if (useUppercase == false && useLowercase == false && useSpecialChar == false && useNumeric == false) {
    return "You must pick at least one criteria to generate a unique password. Try again.";
  }

  var chosenCharacters = [];

  if (useLowercase) {
    chosenCharacters = chosenCharacters.concat(lowercaseChar);
  }

  if (useUppercase) {
    chosenCharacters = chosenCharacters.concat(uppercaseChar);
  }

  if (useSpecialChar) {
    chosenCharacters = chosenCharacters.concat(specialChar);
  }

  if (useNumeric) {
    chosencharacters = chosenCharacters.concat(numericChar);
  }

  console.log(chosenCharacters);

  var generatedPassword = '';

  for (i = 0; i < length; i++) {
    generatedPassword = generatedPassword + chosenCharacters[Math.floor(Math.random() * chosenCharacters.length)];
    console.log(generatedPassword);
  }
  
  return generatedPassword;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}




generateBtn.addEventListener("click", writePassword);




















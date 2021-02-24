//Accessing button in HTML file, which allows  us to add Event Listener at bottom of page
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //These arrays contain available password characters and are accesed later to generate a new array of chosen characters
  var lowercaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numericChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+'];

  //User must pick a character length between 8 and 128 characters. If any more or less, they get an error message until they choose a valid length.
  var length = Number(prompt("How many characters would you like your password to be? (Please choose between 8-128 characters.)"));

  if (length < 8 || length > 128) {
    return "Invalid length. Try again with 8 - 128";
  }

  alert("Great! Your password will have " + length + " characters.");

  //Sets vars for user's criteria choices. If user doesn't pick any criteria, they receive an error message and start over.
  var useUppercase = confirm ("Would you like to add uppercase letters?");
  var useLowercase = confirm ("Would you like to add lowercase letters?");
  var useSpecialChar = confirm ("Would you like add special characters?");
  var useNumeric = confirm("Would you like to add numbers?")
   
  if (useUppercase == false && useLowercase == false && useSpecialChar == false && useNumeric == false) {
    return "You must pick at least one criteria to generate a unique password. Try again.";
  }

  //An array of chosen characters is created for the selected criteria. If a user chooses lowercase and uppercase, the chosenCharacters array will create an array of those arrays' values combined.
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

  //A string is created when the chosenCharacters array is looped through. The string is the generated password and will be as long as the user's chosen length.
  var generatedPassword = '';

  for (i = 0; i < length; i++) {
    generatedPassword = generatedPassword + chosenCharacters[Math.floor(Math.random() * chosenCharacters.length)];
    console.log(generatedPassword);
  }
  
  return generatedPassword;
}


function writePassword() {
  //generatePassword function is called and generated password is displayed on the page.
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


//When the Generate button is clicked, the writePassword function is executed.
generateBtn.addEventListener("click", writePassword);




















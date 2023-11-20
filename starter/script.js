// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
// Java Script Utilities Function getRandom
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//create empty characters password array 
var passwordLength;
var passwordChar;
var newPassword;

// Function to prompt user for password options
function getPasswordOptions() {
  do {
    passwordLength = prompt ("Choose lenght of your password (8-128 characters):");
    if (passwordLength >= 8 && passwordLength<= 128){
      passwordLength = Number(passwordLength);
    var specialCharConfirm = confirm("Would you like spectial characters in your password?");
        if(specialCharConfirm == true){
          passwordChar = passwordChar.concat(specialCharacters);
        }
      var numbersConfirm = confirm("Would you like numbers in your password?");
        if (numbersConfirm == true){
          passwordChar = passwordChar.concat(numericCharacters);
        }
      var upperConfirm = confirm("Would you like upper case letters in your password?");
        if (upperConfirm == true){
          passwordChar = passwordChar.concat(upperCasedCharacters);
        }
      var lowerConfirm = confirm("Would you like lower case letters in your password?");
        if (lowerConfirm == true){
          passwordChar = passwordChar.concat(lowerCasedCharacters);
        }
    }
  } while (passwordLength <= 8 || passwordLength >= 128)
}
function getRandom(arr) {
  for(var i = 0; i < (passwordLength-1); i++){
    newPassword = newPassword + getRandom(0, passwordChar.length)
  }
}

// Function to generate password with user input
function generatePassword() {
  //call  funton to get password options - it will give us length and characters
  var passwordOptions = getPasswordOptions();
  //call get Random funtion - it will give us the whole password
  var getPassword = getRandom(passwordChar);

}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
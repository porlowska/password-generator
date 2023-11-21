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
//Loops index numbers - we need the length of the all char array as max
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//create empty characters password array 
var passwordLength;


// Function to prompt user for password options
function getPasswordOptions() {
  var passwordChar = [];
  do {
    passwordLength = prompt ("Choose lenght of your password (8-128 characters):");
    if (passwordLength >= 8 && passwordLength<= 128){
      passwordLength = parseInt(passwordLength);
      var specialCharConfirm = confirm("Would you like spectial characters in your password?");
      var numbersConfirm = confirm("Would you like numbers in your password?");
      var upperConfirm = confirm("Would you like upper case letters in your password?");
      var lowerConfirm = confirm("Would you like lower case letters in your password?");
        if (specialCharConfirm){
          passwordChar = passwordChar.concat(specialCharacters);
        } 
        if (numbersConfirm){
          passwordChar = passwordChar.concat(numericCharacters);
        } 
        if (upperConfirm){
          passwordChar = passwordChar.concat(upperCasedCharacters);
        } 
        if (lowerConfirm){
          passwordChar = passwordChar.concat(lowerCasedCharacters);
        }
    }
  } while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) //what for letter??

  return passwordChar
}
// from get password function i need ot habe lengt and the array! to run get random. 

function getRandomPassword(optionsLength) { // i need to loop through nubers and then find the index to return password char. 
  var newPassword ="";
  var newChar;
  var j;
  for(var i = 0; i < passwordLength; i++){ // i need to loop same amout as the lenght of the pasword
    j = getRandom(0, (optionsLength.length-1)) // it will give me index number of char in array 
    newChar = optionsLength[j]
    console.log(j, optionsLength[j])
    newPassword = newPassword + newChar
  }
  console.log(newPassword)
  return newPassword
}

// Function to generate password with user input
function generatePassword() {
  //call  funton to get password options - it will give us length and characters
  var passwordOptions = getPasswordOptions();
  //call get Random funtion - it will give us the whole password
  var getPassword = getRandomPassword(passwordOptions);

  return getPassword
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
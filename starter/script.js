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

var passwordLength; // chosen password lenght - global variable

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordChar = [];
  do {
    passwordLength = prompt ("Choose lenght of your password (8-128 characters):"); 
    if (passwordLength >= 8 && passwordLength<= 128){
      passwordLength = parseInt(passwordLength);
        //confrm popups to choose characters
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
  } while ((passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) && passwordLength==true); //if user choses wrong lenght of the password or types anyting different than number, AND the prompt is true it enters the loop. 
  return passwordChar;
}
//function to get random password == random characters form the array
function getRandomPassword(arr) { 
  var newPassword ="";
  var newChar;
  var j;
  for(var i = 0; i < passwordLength; i++){ 
    j = getRandom(0, (arr.length-1)); // get rando index number form the array
    newChar = arr[j];                 // convert that index number into a new character
    newPassword = newPassword + newChar;
  }
  return newPassword;
}

// Function to generate password with user input
function generatePassword() {
  var passwordOptions = getPasswordOptions();
  var getPassword;
  if (passwordOptions.length == 0){ //checks if the array is empty == user didn't chose any characters
    getPassword = "To generate a password please choose at least one type of characters. To try again press the button below!";
  }else{
    getPassword = getRandomPassword(passwordOptions); // generates new password
  }
  return getPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // new password is inserted here to display on the website
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword); 
// Assignment Code
var generateBtn = document.querySelector("#generate");

//Array of special characters
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '"',
  '$',
  '^',
  '?',
  ':',
  ',',
  '.',
  '{',
  '}',
  '(',
  ')',
  '[',
  ']',
  '`',
  '~',
  '_',
  '-',
  '+',
  '='
];

//Array of numeric characters
var numericCharacters = ['0','1','2','3','4','5','6','7','8','9'];

// Array of lowercase characters
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
  'z',
];

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
  'Z',
];

function getPasswordOption() {
  var passwordLength = prompt ("Please input how long you would like your generated password to be. Minimum is 8 and max is 128.")
  if(passwordLength >= 8 && passwordLength <= 128 && typeof passwordLength === "number" ){


  }

  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Ask user if they want special characters
function specialCharsQuestion (){
  let wantCharacters = confirm ("Would you like your password to have special characters ?")
  if (wantCharacters) {
    var yesCharacters = wantCharacters;
  }
}

//Ask user if they want lower cased letters
function lowerCasedQuestion (){
  let wantLowerCased = confirm ("Would you like your password to have lower cased letters ?")
  if (wantLowerCased) {
    var yesLowerCased = wantLowerCased;
  }
}

//Ask user if they want upper cased letters
function upperCasedQuestion (){
  let wantUpperCased = confirm ("Would you like your password to have lower cased letters ?")
  if (wantUpperCased) {
    var yesUpperCased = wantUpperCased;
    alert("You opted to have upper case letters in your password.")
  }
}

//Ask user if they want numeric values
function numericQuestion (){
  let wantNumeric = confirm ("Would you like your password to have lower cased letters ?")
  if (wantNumeric) {
    var yesNumeric = wantNumeric ;
    alert("You opted to have lower case letters in your password.")
  } else {
    alert("You opted to NOT have lower case letters in your password.")
  }
  return yesNumeric;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
numericQuestion()


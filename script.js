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
  if(passwordLength <8 || typeof passwordLength === "number"){


  }

  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function wantSpecialCharacters (){
  confirm ("Would you like your password to have special characters")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

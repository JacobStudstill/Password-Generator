// Assignment Code

//Define variables
var generateBtn = document.querySelector("#generate");
var wantCharacters;
var wantLowerCased;
var wantUpperCased;
var wantNumeric;


// var passwordArray []
//Array of special characters
var specialCharacters = [
  '@',
  '%',
  '+',
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

  //Empty variables we will use later
  var finalPassword = ""
  var addOptions = []


  //Ask the user what they want the length of the password to be
  var passwordLength = prompt ("Please input how long you would like your generated password to be. Minimum is 8 and max is 128.")
  if (passwordLength < 8 || passwordLength > 128){
    alert("Please choose a password length between 8 and 128 characters")
    getPasswordOption();
  }
  else {
      //Ask the user what they want in their password.
    var wantCharacters = confirm ("Would you like your password to have special characters ?")
    var wantLowerCased = confirm ("Would you like your password to have lower cased letters ?")
    var wantUpperCased = confirm ("Would you like your password to have upper cased letters ?")
    var wantNumeric = confirm ("Would you like your password to have numbers in it ?")
    //if 
  if (wantCharacters) {
    addOptions = addOptions.concat(specialCharacters)
  }
  if (wantNumeric) {
    addOptions = addOptions.concat(numericCharacters)
  }
  if (wantLowerCased) {
    addOptions = addOptions.concat(lowerCasedCharacters)
  }
  if (wantUpperCased) {
    addOptions = addOptions.concat(upperCasedCharacters)
  }
  if (wantCharacters == false && wantNumeric == false && wantLowerCased == false && wantUpperCased ==false){
    alert("You must choose at least one type of character for your password")
    getPasswordOption()
  }
  if(passwordLength >= 8 && passwordLength <= 128){
    for(var i=0; i < passwordLength; i++) {
      randomPassword = Math.floor(Math.random() * addOptions.length);
      finalPassword += addOptions[randomPassword]
    }
  }
}
  document.getElementById("password").innerHTML = finalPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", getPasswordOption);

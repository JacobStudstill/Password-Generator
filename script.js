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

    //if wantCharacters is true, concat specialCharacters to the addOptions array and alert user of their choice. If false, alert user
    var wantCharacters = confirm ("Would you like your password to have special characters ?")
    if (wantCharacters) {
      addOptions = addOptions.concat(specialCharacters)
      alert ("You opted to have special characters in your password")
    } else{
      alert ("You opted to NOT have special characters in your password")
    }

    //if wantLowerCased is true, concat lowerCasedCharacters to the addOptions array and alert user of their choice. If false, alert user
    var wantLowerCased = confirm ("Would you like your password to have lower cased letters ?")
    if (wantLowerCased) {
      addOptions = addOptions.concat(lowerCasedCharacters)
      alert ("You opted to have lower cased letters in your password")
    } else {
      alert ("You opted to NOT have lower cased letters in your password")
    }

    //if wantUpperCased is true, concat upperCasedCharacters to the addOptions array and alert user of their choice. If false, alert user
    var wantUpperCased = confirm ("Would you like your password to have upper cased letters ?")
    if (wantUpperCased) {
      addOptions = addOptions.concat(upperCasedCharacters)
      alert ("You opted to have upper cased letters in your password")
    } else {
      alert ("You opted to NOT have upper cased letters in your password")
    }

    var wantNumeric = confirm ("Would you like your password to have numbers in it ?")
    //if wantNumeric is true, concat numericCharacters to the addOptions array and alert user of their choice. If false, alert user
    if (wantNumeric) {
      addOptions = addOptions.concat(numericCharacters)
      alert ("You opted to have numbers in your password")
    } else {
      alert ("You opted to NOT have numbers in your password")
    }

    //If all confirms were false, alert user and restart function
  if (wantCharacters == false && wantNumeric == false && wantLowerCased == false && wantUpperCased ==false){
    alert("You must choose at least one type of character for your password")
    getPasswordOption()
  }

  //If password length is correct. Run a for loop randomizing our addOption array and adding it to our password every time it runs
  if(passwordLength >= 8 && passwordLength <= 128){
    for(var i=0; i < passwordLength; i++) {
      randomPassword = Math.floor(Math.random() * addOptions.length);
      finalPassword += addOptions[randomPassword]
    }
  }
}
//Write the password to the password box
  document.getElementById("password").innerHTML = finalPassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", getPasswordOption);

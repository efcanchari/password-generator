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


function numericValue(title,min,max){
  let message = "";
  let error = true;
  let number= 0;
  do{
    number = prompt(title);
    if (number === null) {
      message = "Input was cancelled.";
      console.log();
    } else if (number.trim() === "") {
      message = "No input was provided.";
    } else if (isNaN(number)) {
      message = "The input is not a numeric value.";
    } else if (number < min || number>max) {
      message = "The number is out of range ("+min+"-"+max+")";
    } else {
      message = "Correct number";
      error = false;
    }
  }while(error);
  return number;
}

//todo: Function to prompt user for password options
function getPasswordOptions() {
  let passwordLength = numericValue("Introduce password lenght (8-128)",8,128);

}

//todo: Function for getting a random element from an array
function getRandom(arr) {
  if (Array.isArray(arr) && arr.length > 0) {
    let index = Math.floor(Math.random() * arr.length);
    let value = arr[index];
    console.log(value);
    return value;
  } else {
    console.log("arr is not an array or is empty");
    return null;
  }
}

//todo: Function to generate password with user input
function generatePassword() {

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
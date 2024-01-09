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
  let isNumber = false;
  let exit = false;
  let number= 0;
  do{
    number = prompt(message+title);
    console.log("number: "+number);
    if (number === null) {
      message = "Input was cancelled, try again\n";
      exit = true;
    } else if (number.trim() === "") {
      message = "No input was provided, try again\n";
    } else if (isNaN(number)) {
      message = "The input is not a numeric value, try again\n";
    } else if (number < min || number>max) {
      message = "The number "+ number +" is out of range, try again\n";
    } else {
      //Valid number
      isNumber = true;
    }
  }while(!isNumber && !exit);
  return {
    "isNumber":isNumber,
    "value":number
  };
}

function charactersType(){
  let isCorrect = false;

  let hasLowerCase = false;
  let hasUpperCase = false;
  let hasNumeric = false;
  let hasSpecialCharts = false;

  do{
    hasLowerCase = confirm("Shall we include Lowercase?");
    hasUpperCase = confirm("Shall we include Uppercase?");
    hasNumeric = confirm("Shall we include Numbers?");
    hasSpecialCharts = confirm("Shall we include Special charts? (%, @, &, etc...)");
    //if there is at least one of them true, so isCorrect
    if(hasLowerCase || hasUpperCase || hasNumeric || hasSpecialCharts){
      isCorrect=true;
    }else{
      alert("You must choose at least one of Characters type, let's try again");
    }
  }while(!isCorrect);

  return {
    "hasLowerCase":hasLowerCase,
    "hasUpperCase":hasUpperCase,
    "hasNumeric":hasNumeric,
    "hasSpecialCharts":hasSpecialCharts
  };
}

function getRandomNumber(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//todo: Function to prompt user for password options
function getPasswordOptions() {
  let lengthResult = numericValue("Introduce password lenght (8-128)",8,128);
  console.log(lengthResult);

  if(lengthResult.isNumber){
    let charactersOptions = charactersType();
    console.log(charactersOptions);

    return {
      "result":true,
      "passwordLength":lengthResult.value,
      "characters":charactersOptions
    };

  }else{
    return {
      "result":false,
      "message":"Generation of password has been cancelled."
    };
  }
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
  let options = getPasswordOptions();
  //If there result is false, we return the message
  if(options.result === false){
    return options.message;
  }else{
    let password = "";
    let matrix = [];
    let index = 0;
    if(options.characters.hasLowerCase){
      matrix[index]=lowerCasedCharacters;
      index++;
    }
    if(options.characters.hasUpperCase){
      matrix[index]=upperCasedCharacters;
      index++;
    }
    if(options.characters.hasNumeric){
      matrix[index]=numericCharacters;
      index++;
    }
    if(options.characters.hasSpecialCharts){
      matrix[index]=specialCharacters;
      index++;
    }

    //create the password
    for(let i=0;i<options.passwordLength;i++){
      let j = getRandomNumber(0,index-1);
      password = password + getRandom(matrix[j]);
    }

    return password;
  }
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
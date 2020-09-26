// Generating a password:
// 1. Prompt user: "How many characters would you like your password to be? Must be between 8-128 characters."
//      A. If within range:
//          a. Confirm passoword length: "You have selected a password length of __."
//          b. Move to prompt 2
//      B. If out of range:
//          a. Error message, then back to prompt 1
// 2. Prompt user: "Would you like your password to contain lower case characters?"
//      A. If 'OK': add lower case characters to generatePassword
//      B. If 'Cancel': exclude lower case characters from generatePassword
// 3. Prompt user: "Would you like your password to contain upper case characters?"
//      A. If 'OK': add upper case characters to generatePassword
//      B. If 'Cancel': exclude upper case characters from generatePassword
// 4. Prompt user: "Would you like your password to contain numbers?"
//      A. If 'OK': add numbers to generatePassword
//      B. If 'Cancel': exclude numbers from generatePassword
// 5. Prompt user: "Would you like your password to contain special characters?"
//      A. If 'OK': add special characters to generatePassword
//      B. If 'Cancel': exclude special characters from generatePassword
// 6. Confirm user: "Great job! You have selected a password that is ___ characters long, and contains ______, ______, ______, and ________. Ready to generate your password?"
//      A. If 'OK': generatePassword

// Group of arrays:
var arrOfLowcase = 'abcdefghijklmnopqrstuvwxyz'.split('');
var arrOfUppercase = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
var arrnumeric = '0123456789'.split('');
var arrSpecialCharacters = '!@#$%^&*()_+~`|}{[]\:;?><,./-='.split('');
var characterPool = [];

// Setting password character length
function generatePassword() {
  var passwordLengthInteger = 0;

  while (true) {
    var passwordLength = prompt('How many characters would you like your password to be? Must be between 8-128 characters.');
    if (isNaN(passwordLength)) {
      alert('Please, enter a valid number.');
      continue;
    }

    passwordLengthInteger = parseInt(passwordLength);
    if (8 <= passwordLengthInteger && passwordLengthInteger <= 128) {
      alert('You have selected a password length of ' + passwordLength);
      break;
    }
    else {
      alert('Error! You must select a password length between 8-128 characters. Number must be a whole number, no decimals.');
    }
  }

  // Generation of user selected password:
  while (true) {
    var lowerCase = confirm('Would you like your password to contain lower case characters?');
    var upperCase = confirm('Would you like your password to contain upper case characters?');
    var numbers = confirm('Would you like your password to contain numbers?');
    var specialCharacters = confirm('Would you like your password to contain special characters?');

    if (lowerCase) {
      characterPool.push(...arrOfLowcase);
      lowerCase = 'lower case ';
    }
    else {
      lowerCase = '';
    }

    if (upperCase) {
      characterPool.push(...arrOfUppercase);
      upperCase = 'upper case ';
    }
    else {
      upperCase = '';
    }

    if (numbers) {
      characterPool.push(...arrnumeric);
      numbers = 'numbers ';
    }
    else {
      numbers = '';
    }

    if (specialCharacters) {
      characterPool.push(...arrSpecialCharacters);
      specialCharacters = 'special characters ';
    }
    else {
      specialCharacters = '';
    }

    // Confirm user selected criteria
    if (characterPool.length > 0) {
      if (confirm('Great job! You have selected a password that is ' + passwordLength + ' characters long, and contains ' + lowerCase + upperCase + numbers + specialCharacters + ' Ready to generate your password?')) {
        var userPassword = [];
        var myPassword = '';
        // Print password here
        for (var i = 0; i < passwordLengthInteger; i++) {
          var randomIndex = Math.floor(Math.random() * characterPool.length);
          userPassword.push(characterPool[randomIndex]);
        }
        myPassword = userPassword.join('');
        return myPassword;
        break;
      }
      else {
        return;
      }
    } else {
      alert('Please, choose at least one option!');

    }
  }
}
// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
// Assignment Code
var generateBtn = document.querySelector("#generate");
var lc = "";
var uc = "";
var nu = "";
var sc = "";


// Generate password
function generatePassword(ls,chars) {
  var password = "";
  for (var i = 1; i <= ls; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
   }
   return password;
}

// Write password to the #password input
function writePassword() {
  
  // Length of the passowrd
  var LengthPassword = window.prompt("length of the password:");
while (isNaN(LengthPassword) || LengthPassword <= 7 || LengthPassword >= 128) {
  window.alert("Number only or at least 8 characters or no more than 128 characters, Try again");
  var LengthPassword = window.prompt("length of the password:");
}

  // add lowercase
  var lowerCase = window.prompt("Do you want to include lowercase character types? Yes or No");
  lowerCase = lowerCase.toUpperCase();
  while (lowerCase !== "N" && lowerCase !== "Y") {
    window.alert("Please enter Y or N");
    var lowerCase = window.prompt("Do you want to include lowercase character types? Yes or No");
  }
  if (lowerCase === "Y") {
    lc = "abcdefghijklmnopqrstuvwxyz";
  }else {
    lc
  }
  
  // add uppercase
  var upperCase = window.prompt("Do you want to include uppercase character types? Yes or No");
  upperCase = upperCase.toUpperCase();
  while (upperCase !== "N" && upperCase !== "Y") {
    window.alert("Please enter Y or N");
    var upperCase = window.prompt("Do you want to include uppercase character types? Yes or No");
  }
  if (upperCase === "Y") {
    uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }else {
    uc
  }

  // add numeric
  var numeric = window.prompt("Do you want to include numeric character types? Yes or No");
  numeric = numeric.toUpperCase();
  while (numeric !== "N" && numeric !== "Y") {
    window.alert("Please enter Y or N");
    var numeric = window.prompt("Do you want to include numeric character types? Yes or No");
  }
  if (numeric === "Y") {
    nu = "0123456789";
  }else {
    nu
  }

  // add special characters
  var special = window.prompt("Do you want to include special character types? Yes or No");
  special = special.toUpperCase();
  while (special !== "N" && special !== "Y") {
    window.alert("Please enter Y or N");
    var special = window.prompt("Do you want to include special character types? Yes or No");
  }
  if (special === "Y") {
    sc = "!@#$%^&*()";
  }else {
    sc
  }  

  // at least one character type should be selected
  var characs = lc+uc+nu+sc
  while (characs.length === 0 ) {
    window.alert("Please select one of character");
        // add lowercase
    var lowerCase = window.prompt("Do you want to include lowercase character types? Yes or No");
    lowerCase = lowerCase.toUpperCase();
    while (lowerCase !== "N" && lowerCase !== "Y") {
      window.alert("Please enter Y or N");
      var lowerCase = window.prompt("Do you want to include lowercase character types? Yes or No");
    }
    if (lowerCase === "Y") {
      lc = "abcdefghijklmnopqrstuvwxyz";
    }else {
      lc
    }

    // add uppercase
    var upperCase = window.prompt("Do you want to include uppercase character types? Yes or No");
    upperCase = upperCase.toUpperCase();
    while (upperCase !== "N" && upperCase !== "Y") {
      window.alert("Please enter Y or N");
      var upperCase = window.prompt("Do you want to include uppercase character types? Yes or No");
    }
    if (upperCase === "Y") {
      uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }else {
      uc
    }

    // add numeric
    var numeric = window.prompt("Do you want to include numeric character types? Yes or No");
    numeric = numeric.toUpperCase();
    while (numeric !== "N" && numeric !== "Y") {
      window.alert("Please enter Y or N");
      var numeric = window.prompt("Do you want to include numeric character types? Yes or No");
    }
    if (numeric === "Y") {
      nu = "0123456789";
    }else {
      nu
    }
    
    var characs = lc+uc+nu+sc
    // add special characters
    var special = window.prompt("Do you want to include special character types? Yes or No");
    special = special.toUpperCase();
    while (special !== "N" && special !== "Y") {
      window.alert("Please enter Y or N");
      var special = window.prompt("Do you want to include special character types? Yes or No");
    }
    if (special === "Y") {
      sc = "!@#$%^&*()";
    }else {
      sc
    }  

  }

  var password = generatePassword(LengthPassword,characs);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








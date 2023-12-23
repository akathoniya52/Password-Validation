// javascript
let oneNumber = document.getElementById("one-number");
let eightChar = document.getElementById("eight-character");
let oneLower = document.getElementById("one-lower");
let oneUpper = document.getElementById("one-upper");
let oneSpecial = document.getElementById("one-special");
let password = document.getElementById("password");

function hasLowerCase(str) {
  for (const char of str) {
    // Check if the character is an uppercase letter using a regular expression
    if (/[a-z]/.test(char)) {
      // Return true if an uppercase letter is found
      return true;
    }
  }
  // Return false if no uppercase letter is found
  return false;
}

function hasUpperCase(str) {
  // Loop through each character of the string
  for (const char of str) {
    // Check if the character is an uppercase letter using a regular expression
    if (/[A-Z]/.test(char)) {
      // Return true if an uppercase letter is found
      return true;
    }
  }
  // Return false if no uppercase letter is found
  return false;
}

function hasNumber(str) {
  // Loop through each character of the string
  for (const char of str) {
    // Check if the character is an uppercase letter using a regular expression
    if (/[0-9]/.test(char)) {
      // Return true if an uppercase letter is found
      return true;
    }
  }
  // Return false if no uppercase letter is found
  return false;
}

function addClass(item) {
  item.classList.add("listImage");
}

function removeClass(item) {
  item.classList.remove("listImage");
}

function onChangeHandler() {
  let x = document.getElementById("password").value;
  // for Numbers
  if (hasNumber(x)) {
    addClass(oneNumber);
    // oneNumber.style.color = "green"
  } else {
    // oneNumber.style.color = "red"
    removeClass(oneNumber);
  }
  // 8 length character
  if (x.length >= 8) {
    addClass(eightChar);
    // oneNumber.style.color = "green"
  } else if (x.length < 8) {
    removeClass(eightChar);
  }
  // lowerCase
  if (hasLowerCase(x)) {
    addClass(oneLower);
  } else {
    removeClass(oneLower);
  }
  // upperCase
  if (hasUpperCase(x)) {
    addClass(oneUpper);
  } else {
    removeClass(oneUpper);
  }
  // Special Character
  if (
    x.includes("@") ||
    x.includes("$") ||
    x.includes("!") ||
    x.includes("%") ||
    x.includes("&") ||
    x.includes("*")
  ) {
    addClass(oneSpecial);
  } else {
    removeClass(oneSpecial);
  }
}

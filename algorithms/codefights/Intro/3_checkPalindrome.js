//Built-In Functions
function checkPalindrome(inputString) {
 return inputString === inputString.split("").reverse().join("");
}
//Other Solution

// basic for loop
function checkPalindrome(inputString) {
  var reverseStr = '';
  for (var i = inputString.length - 1; i >= 0; i--) {
       reverseStr += inputString[i];
   }
   return inputString === reverseStr;
}

// apply
function checkPalindrome(inputString) {
    return [...inputString].reverse().join('') === inputString
}
// arrow function
checkPalindrome=i => {
    return i.split``.reverse().join`` == i
}

//CharAt function and half of the string with other half
function checkPalindrome(inputString) {

    for(i=0; i < inputString.length/2 ; i++){
        if(inputString.charAt(i) != inputString[inputString.length-i-1])
            return false;
    }
    return true;
}

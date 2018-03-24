// my function
function adjacentElementsProduct(inputArray) {
 var num = -Infinity;
 for(var i=0; i<inputArray.length; i++){
  if(inputArray[i] * inputArray[i+1] > num ){
   num = inputArray[i] * inputArray[i+1];
  }
 }
 console.log(num);
 return num;
}

// apply method
function adjacentElementsProduct(arr) {
  return Math.max(...arr.slice(1).map((x,i)=>[x*arr[i]]))
}

// checking from 1st element
function adjacentElementsProduct(inputArray) {
    var prod = inputArray[0] * inputArray[1];
    for (var i = 1; i<inputArray.length - 1;i++) {
        prod = Math.max(prod, inputArray[i] * inputArray[i+1]);
    }
    return prod
}
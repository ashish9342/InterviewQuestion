function bubbleSort(arr) {
  var temp;
  for (var k = 1; k < arr.length - 1; k++) {
    var flag = 0;
    for (var i = 0; i < arr.length - k - 1; i++) {
      // for (var i = 0; i < arr.length - 2; i++) {
      if (arr[i] > arr[i + 1]) {
        //swap the elements
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        flag = 1;
      }

    }
    if (flag == 0) {
      break; // swap elements till k element(other half sorted array)
    }
  }
  temp = undefined;
  delete temp;

  return arr;
}
arr = [2, 4, 5, 2, 3, 9];
bubbleSort(arr);
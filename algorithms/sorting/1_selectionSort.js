function selectionSort(arr) {
  var temp;
  for (var i = 0; i < arr.length - 2; i++) {
    var min = arr[i]; // intialize initial("i") element as min
    for (var j = i + 1; j < arr.length - 1; j++) {
      if (arr[i] > arr[j]) { // compare wheather i is greater than i+1
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  temp = undefined;
  delete temp;
  return arr;
}
arr = [100, 200, 98, 2, 1, 0, 123, 983, 1234];
selectionSort(arr);

//Time complexity : O(n^2)
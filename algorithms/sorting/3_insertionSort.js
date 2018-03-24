function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var temp = arr[i];
    var hole = i;
    while (hole > 0 && arr[hole - 1] > temp) {
      arr[hole] = arr[hole - 1];
      hole--;
    }
    arr[hole] = temp;
  }
  delete hole;
  delete temp;
  return arr;
}
arr = [2, 4, 5, 2, 3, 9, 0, 1 ];
insertionSort(arr);
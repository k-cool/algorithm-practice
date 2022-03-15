function insertionSort(arr) {
  let temp;
  let position;

  for (let i = 1; i < arr.length; i++) {
    temp = arr[i];
    position = i - 1;

    while (position >= 0) {
      if (arr[position] > temp) arr[position + 1] = arr[position];
      else break;
      position--;
    }
    arr[position + 1] = temp;
  }
  return arr;
}

const arr = [4, 1, 3, 6, 7, 4];

console.log(insertionSort(arr));

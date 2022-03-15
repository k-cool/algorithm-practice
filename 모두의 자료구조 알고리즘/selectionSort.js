function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowestIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      console.log(i, j);
      if (arr[j] < arr[lowestIndex]) lowestIndex = j;
    }
    if (lowestIndex !== i) {
      [arr[i], arr[lowestIndex]] = [arr[lowestIndex], arr[i]];
      console.log('switch', i, lowestIndex);
    }
  }
  console.log(arr);
  return arr;
}
const arr = [4, 1, 3, 6, 7];

console.log(selectionSort(arr));

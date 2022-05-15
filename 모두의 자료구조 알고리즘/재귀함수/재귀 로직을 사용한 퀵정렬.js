/*
설명 링크
https://programmers.co.kr/learn/courses/30/lessons/60057?language=javascript

input: "aabbaccc"
output: 7
*/

class SortableArray {
  constructor(arr) {
    this.array = arr;
  }

  partition(leftPointer, rightPointer) {
    const pivotIndex = rightPointer;
    const pivot = this.array[pivotIndex];
    rightPointer -= 1;

    do {
      while (this.array[leftPointer] < pivot) leftPointer++;
      while (this.array[rightPointer] > pivot) rightPointer--;

      if (leftPointer >= rightPointer) break;
      else {
        let temp = this.array[leftPointer];
        this.array[leftPointer] = this.array[rightPointer];
        this.array[rightPointer] = temp;
      }

      leftPointer += 1;
    } while (true);

    let temp = this.array[leftPointer];
    this.array[leftPointer] = this.array[pivotIndex];
    this.array[pivotIndex] = temp;

    return leftPointer;
  }

  quickSort(leftIndex, rightIndex) {
    if (rightIndex - leftIndex <= 0) return;

    const pivotIndex = this.partition(leftIndex, rightIndex);

    this.quickSort(leftIndex, pivotIndex - 1);
    this.quickSort(pivotIndex + 1, rightIndex);
  }

  quickSelect(nthLowestValue, leftIndex, rightIndex) {
    console.log(this.array);
    if (rightIndex - leftIndex <= 0) return this.array[leftIndex];

    const pivotIndex = this.partition(leftIndex, rightIndex);

    if (nthLowestValue < pivotIndex)
      this.quickSelect(nthLowestValue, leftIndex, pivotIndex - 1);
    else if (nthLowestValue > pivotIndex)
      this.quickSelect(nthLowestValue, pivotIndex + 1, rightIndex);
    else {
      console.log(this.array[pivotIndex]);
      return 10;
    }
  }
}

// sort Test
// const input = [0, 5, 2, 1, 6, 3];
// const sortableArray = new SortableArray();
// sortableArray.quickSort(0, input.length - 1);
// const output = sortableArray.array;

// console.log('input: ', input);
// console.log('ouput: ', output);

// select Test
const input = [0, 50, 20, 10, 60, 30];
const sortableArray = new SortableArray(input);
const output = sortableArray.quickSelect(1, 0, sortableArray.array.length - 1);
console.log('input: ', input);
console.log('ouput: ', output);

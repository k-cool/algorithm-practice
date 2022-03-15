function maxNum(arr) {
  let max = arr[0];
  let step = 0;
  for (let i = 1; i < arr.length; i++) {
    step++;
    if (arr[i] > max) max = arr[i];
  }
  console.log('step: ' + step);
  return max;
}

const arr = [4, 1, 3, 6, 7, 3, 10, 8];

console.log(maxNum(arr));

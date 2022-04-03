/* 
배열의 요소를 2배시켜 반환하는 함수(원본 배열 수정)

input: [1,2,3,4,5]
output: [2,4,6,8,10]
*/

function doubleArrayRecursive(arr, i = 0) {
  arr[i] *= 2;
  if (i >= arr.length - 1) return;
  doubleArrayRecursive(arr, i + 1);
}

const input = [1, 2, 3, 4, 5];
doubleArrayRecursive(input);
const output = input;

console.log('input: ', input);
console.log('ouput: ', output);

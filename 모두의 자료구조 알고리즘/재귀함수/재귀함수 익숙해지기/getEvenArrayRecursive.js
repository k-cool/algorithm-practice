/*
수 배열을 받아 짝수만 포함하는 새배열을 반환하는 함수를 재귀적으로 작성

input: [1,2,3,4,5,6,7,8,9]
output: [2,4,6,8]
*/

function getEvenArrayRecursive(arr) {
  if (arr.length === 0) return [];
  return arr[0] % 2 === 0
    ? [arr[0]].concat(getEvenArrayRecursive(arr.slice(1)))
    : getEvenArrayRecursive(arr.slice(1));
}

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 204, 127, 326];
const output = getEvenArrayRecursive(input);

console.log('input: ', input);
console.log('ouput: ', output);

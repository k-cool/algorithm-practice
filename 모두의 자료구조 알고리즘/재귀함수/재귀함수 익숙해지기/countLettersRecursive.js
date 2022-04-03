/*
문자열 배열을 받아 모든 문자열에 사용된 문자 개수를 반환하는 함수를 재귀적으로 구현

input: ['ab', 'c', 'def', 'ghij']
output: 10
*/

function countLettersRecursive(arr) {
  if (arr.length === 0) return 0;
  return arr[0].length + countLetterRecursive(arr.slice(1));
}

const input = ['ab', 'c', 'def', 'ghij'];
const output = countLettersRecursive(input);

console.log('input: ', input);
console.log('ouput: ', output);

/*
문자열을 받아 'x'가 들어간 첫번째 인덱스를 반환하는 함수를 재귀적으로 구현

input: 'abcdefghijklmnopqrstuvwxyz'
output: 23
*/

function getXIndexRecursive(str, i = 0) {
  return str[i] === 'x' ? i : getXIndexRecursive(str, ++i);
}

const input = 'abcdefghijklmnopqrstuvwxyz';
const output = getXIndexRecursive(input);

console.log('input: ', input);
console.log('ouput: ', output);

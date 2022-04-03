/*
하향식 재귀의 사고를 기반으로 문자열을 뒤집어서 반환.

input: 'abcde'
output: 'edcba'
*/

function reversStringRecursive(str) {
  if (str.length === 1) return str;
  return reversStringRecursive(str.slice(1)) + str[0];
}

const input = 'abcde';
console.log('input: ', input);

const output = reversStringRecursive(input);
console.log('ouput: ', output);

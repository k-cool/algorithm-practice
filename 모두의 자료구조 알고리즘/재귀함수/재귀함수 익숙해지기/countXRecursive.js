/*
하향식 재귀의 사고를 기반으로 x개수 새기

input: 'axbxcxd'
output: 3
*/

// function countXRecursive(str) {
//   let cnt = str[0] === 'x' ? 1 : 0;
//   return str.length === 1 ? cnt : countXRecursive(str.slice(1)) + cnt;
// }

// ver 2
function countXRecursive(str) {
  if (str.length === 0) return 0;
  return str[0] === 'x'
    ? 1 + countXRecursive(str.slice(1, str.length))
    : countXRecursive(str.slice(1, str.length));
}

const input = 'axbxcxd';
console.log('input: ', input);

const output = countXRecursive(input);
console.log('ouput: ', output);

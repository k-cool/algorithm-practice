/*
유일경로 문제(Unique path)를 메모이제이션으로 효율성을 개선하자.

input: 100
output: 21
*/

function uniquePathRecursive(x, y, memo = {}) {
  if (x === 1 || y === 1) return 1;
  if (!memo[[x, y]])
    memo[[x, y]] =
      uniquePathRecursive(x - 1, y, memo) + uniquePathRecursive(x, y - 1, memo);
  return memo[[x, y]];
}

const inputX = 3;
const inputY = 3;
const output = uniquePathRecursive(inputX, inputY);

console.log('input: ', inputX, inputY);
console.log('ouput: ', output);

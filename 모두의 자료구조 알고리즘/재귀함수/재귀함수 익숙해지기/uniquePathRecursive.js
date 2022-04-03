/*
유일경로(Unique Paths)행의 수와 열의 수를 받아 왼쪽 맨 윗칸에서 오른쪽 맨 아랫칸까지 가는 
최단경로의 개수를 계산하여 반환하는 함수를 재귀적으로 구현

input: 3, 7
output: 
*/

function uniquePathRecursive(x, y) {
  return x === 1 || y === 1
    ? 1
    : uniquePathRecursive(x - 1, y) + uniquePathRecursive(x, y - 1);
}

const inputX = 4;
const inputY = 4;
const output = uniquePathRecursive(inputX, inputY);

console.log('input: ', inputX, inputY);
console.log('ouput: ', output);

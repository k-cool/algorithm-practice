/*
삼각수(Triangular Numbers) 수열에 N번째 값을 반환하는 함수를 재귀적으로 구현
삼각수 수열은 N번째 수열이 N+바로 앞 수 인 수열이다.
예시 1, 3, 6, 10, 15, 21, ... 

input: 7
output: 28
*/

function triangularNumberRecursive(n) {
  return n === 1 ? 1 : n + triangularNumberRecursive(n - 1);
}

const input = 7;
const output = triangularNumberRecursive(input);

console.log('input: ', input);
console.log('ouput: ', output);

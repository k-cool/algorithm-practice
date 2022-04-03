/*
재귀함수를 이용해 골곰 수열을 구현하고, 메모이제이셔느을 최적화하자
Golomb 수열이란 모든 k에 대해 k가 수열상에서 f(k)번 등장하는 단조증가 수열이다. 
단조증가 수열이란 k값이 증가함에 따라 f(k)값이 감소하지 않는 수열을 말한다. 
여기서 k와 f(k)는 모두 자연수이다.

input: 100
output: 21
*/

function golomb(n, memo = {}) {
  if (n === 1) return 1;
  if (!memo[n])
    memo[n] = 1 + golomb(n - golomb(golomb(n - 1, memo), memo), memo);
  return memo[n];
}

const input = 100;
console.log('input: ', input);

const output = golomb(input);
console.log('ouput: ', output);

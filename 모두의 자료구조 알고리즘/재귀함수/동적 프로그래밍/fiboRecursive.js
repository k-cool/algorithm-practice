/*
피보나치 수열을 재귀적으로 구현

input: 10
output: 55
*/

function fibo1(n) {
  console.log('RECURSIVE!');
  if (n === 0 || n === 1) return n;
  return fibo1(n - 2) + fibo1(n - 1);
}

function fibo2(n, memo = {}) {
  console.log('RECURSIVE!');
  if (n === 0 || n === 1) return n;
  if (!memo[n]) memo[n] = fibo2(n - 2, memo) + fibo2(n - 1, memo);
  return memo[n];
}

function fibo3(n) {
  if (n === 0) return 0;
  let a = 0;
  let b = 1;
  let temp;

  for (let i = 0; i < n - 1; i++) {
    temp = a;
    a = b;
    b = a + temp;
    console.log(a, b);
  }

  return b;
}

const input = 10;
const output = fibo3(input);

console.log('input: ', input);
console.log('ouput: ', output);

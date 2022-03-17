/*
스택 구조를 이용하여 문자열을 거꾸로 만드는 함수 구현

input: 'abcde'
output: 'edcba'
*/

const Stack = require('./Stack');

const func = function stringReveter(string) {
  let result = '';
  const strStack = new Stack();

  for (let i = 0; i < string.length; i++) strStack.push(string[i]);
  for (let i = 0; i < string.length; i++) result += strStack.pop();

  return result;
};

const input = 'abcde';
const output = func(input);

console.log('input: ', input);
console.log('ouput: ', output);

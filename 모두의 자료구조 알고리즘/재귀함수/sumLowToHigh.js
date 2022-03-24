/* 
low에서 high 사이의 정수를 모두 더한 값을 반환하는 함수 재귀적으로 구현

input: low = 0, high = 10
output: 55

*/

const func = function sumLowToHigh(low, high) {
  if (low > high) throw new Error('Invalid input: low is higer than high');
  if (low === high) return low;
  return low + sumLowToHigh(low + 1, high);
};

const low = 0;
const high = -10;
const output = func(low, high);

console.log('input: ', low, high);
console.log('ouput: ', output);

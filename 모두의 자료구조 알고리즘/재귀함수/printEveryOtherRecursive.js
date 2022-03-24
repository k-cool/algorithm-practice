/* 
low 부터 high까지 하나 씩 걸러서 콘솔을 찍는다.

input: low = 0, high = 10
 콘솔창 -> 0 2 4 6 8 10 The End
*/

const func = function printEveryOtherRecursive(low, high) {
  if (low >= high) return console.log('The End');
  console.log(low);
  printEveryOtherRecursive(low + 2, high);
};

const low = 0;
const high = -10;
console.log('input: ', low, high);

const output = func(low, high);

// console.log('ouput: ', output);

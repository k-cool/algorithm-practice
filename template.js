/* 
배열에서 첫 번째 중복값을 찾아 반환하는 함수

input: ["a", "b", "c", "c", "d", "e", "e", "f"]
output: "c"


*/

const func = function findOverlap(arr) {
  const hashTable = {};

  for (const value of arr)
    if (hashTable[value]) return value;
    else hashTable[value] = true;
};

const input = ['a', 'b', 'c', 'c', 'd', 'e', 'e', 'f'];
const output = func(input);

console.log('input: ', input);
console.log('ouput: ', output);

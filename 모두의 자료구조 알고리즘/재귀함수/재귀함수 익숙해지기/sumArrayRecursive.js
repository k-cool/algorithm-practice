/*
하향식 재귀의 사고를 기반으로 배열의 합을 구하자.(원본 배열 변경)

input: [1,2,3,4,5]
output: 15
*/

function sumArrayRecursive(arr) {
  if (arr.length === 1) return arr[0];
  const newArr = arr.filter((el, i) => i !== 0);
  return arr[0] + sumArrayRecursive(newArr);
}

const input = [1, 2, 3, 4, 5];
console.log('input: ', input);

const output = sumArrayRecursive(input);
console.log('ouput: ', output);

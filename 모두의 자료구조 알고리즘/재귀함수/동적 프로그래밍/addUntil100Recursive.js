/*
배열의 합을 반환하되 더해서 100이 넘으면 그 수는 더하지 않음. 
재귀적으로 구현하되 동적프로그래밍으로 최적화하기

input: [1,2,3,4,99,5,6,7,80,8,9,10]
output: 55
*/

function addUntil100Recursive(arr) {
  if (arr.length === 0) return 0;
  const subResult = addUntil100Recursive(arr.slice(1));
  return arr[0] + subResult > 100 ? subResult : arr[0] + subResult;
}

const input = [1, 2, 3, 4, 99, 5, 6, 7, 80, 8, 9, 10];
console.log('input: ', input);

const output = addUntil100Recursive(input);
console.log('ouput: ', output);

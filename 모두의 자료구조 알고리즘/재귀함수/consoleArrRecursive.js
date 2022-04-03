/*
배열내부의 숫자를 재귀적으로 돌면서 콘솔에 출력하기
*/

function consoleArrRecursive(arr) {
  arr.forEach(el => {
    Array.isArray(el) ? consoleArr(el) : console.log(el);
  });
}

const array = [
  1,
  2,
  3,
  [4, 5, 6],
  7,
  [8, [9, 10, 11, [12, 13, 14]]],
  [15, 16, 17, 18, 19, [20, 21, 22, 23, 24, 25, [26, 27, 28, 29]], 30, 31],
  32,
];

consoleArrRecursive(array);

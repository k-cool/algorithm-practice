/*
하향식 재귀의 사고를 기반으로 계단을 올라가는 방법을 생각해본다.
계단은 한번에 1계단, 2계단, 3계단씩 올라갈 수 있다.
계단수를 입력하면 계단을 올라가는 방법의 경우의 수를 반환한다.

input: 4
output: 7

input: 3
output: 4
*/

function pathRecursive(stepNumber) {
  if (stepNumber < 0) return 0;
  if (stepNumber === 1 || stepNumber === 0) return 1;
  return (
    pathRecursive(stepNumber - 1) +
    pathRecursive(stepNumber - 2) +
    pathRecursive(stepNumber - 3)
  );
}

const input = 5;
console.log('input: ', input);

const output = pathRecursive(input);
console.log('ouput: ', output);

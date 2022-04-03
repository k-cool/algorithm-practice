function getMaxRecursive(arr) {
  console.log('RECURSIVE!');
  if (arr.length === 1) return arr[0];
  const subResult = getMaxRecursive(arr.slice(1));
  return arr[0] > subResult ? arr[0] : subResult;
}

const input = [1, 2, 3, 4];
const output = getMaxRecursive(input);

console.log('input: ', input);
console.log('ouput: ', output);

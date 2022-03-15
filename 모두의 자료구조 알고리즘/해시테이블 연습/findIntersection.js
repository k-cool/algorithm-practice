function findIntersection(arr1, arr2) {
  let longer;
  let shorter;

  if (arr1.length > arr2.length) {
    longer = arr1;
    shorter = arr2;
  } else {
    longer = arr2;
    shorter = arr1;
  }

  const result = [];
  const hashTable = {};

  for (const value of longer) hashTable[value] = true;

  for (const value of shorter) if (hashTable[value]) result.push(value);

  return result;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];

console.log(findIntersection(arr1, arr2));

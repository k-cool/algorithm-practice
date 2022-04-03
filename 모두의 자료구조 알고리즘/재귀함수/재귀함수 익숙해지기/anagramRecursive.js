/*
하향식 재귀의 사고를 기반으로 주어진 문자열에 대하여 애너그램 배열을 반환하는 함수

input: 'abc'
output: ['abc,'acb','bac','bca','cab','cba']
*/

function anagramRecursive(str) {
  if (str.length === 1) return [str[0]];

  const arr = [];
  const subAnagram = anagramRecursive(str.slice(1));

  subAnagram.forEach(subAna => {
    for (let i = 0; i < subAna.length + 1; i++)
      arr.push(subAna.slice(0, i) + str[0] + subAna.slice(i));
  });

  return arr;
}

const input = 'abc';
console.log('input: ', input);

const output = anagramRecursive(input);
console.log('ouput: ', output);

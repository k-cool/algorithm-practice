/*
디렉토리의 모든 하위디렉토리 명을 출력하는 함수.

*/

const fs = require('fs');

function findDirectories(directory) {
  const files = fs.readdirSync(directory);

  files.forEach(file => {
    console.log(file);

    const subDir = directory + '/' + file;
    const subList = fs.readdirSync(subDir);

    if (subList[0]) findDirectories(subDir);
  });
}

const path = './모두의 자료구조 알고리즘/재귀함수/테스트용';

findDirectories(path);

const sleep = require('../기타/sleep');

function countDownRoop(n) {
  for (let i = n; i > 0; i--) {
    console.log(i);
    sleep(1000);
  }
  console.log('종료!');
}

function countDownRecursive(n) {
  if (n === 0) return console.log('종료!');

  console.log(n);
  sleep(1000);
  countDownRecursive(n - 1);
}

countDownRoop(3);
countDownRecursive(3);

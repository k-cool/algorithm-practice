/*
큐 구조를 사용하여 여러 컴퓨터로 부터 출력 요청을 순서대로 받아 처리하는 프린터 매니져 구현
*/

const Queue = require('./Queue');

class PrintManger {
  constructor() {
    this.printQueue = new Queue();
  }

  enqueuePrintRequest(doc) {
    this.printQueue.enqueue(doc);
  }

  run() {
    while (this.printQueue.read()) {
      this.print(this.printQueue.dequeue());
    }
  }

  print(doc) {
    console.log(doc, 'has been printed!');
  }
}

const printManager = new PrintManger();

printManager.enqueuePrintRequest('こんばんは');
printManager.enqueuePrintRequest('hello');
printManager.enqueuePrintRequest('안녕');

printManager.run();

const { DoublyLinkedList } = require('./doublyLinkedList');

class Queue {
  constructor() {
    this.data = new DoublyLinkedList(null, null, 0);
  }

  enque(element) {
    this.data.insertAtEnd(element);
  }

  deque() {
    return this.data.removeFromFront().data;
  }

  read() {
    return this.data.firstNode;
  }
}

const queue = new Queue();

queue.enque('wow');
console.log(queue.read());
queue.enque('what');
console.log(queue.read());
queue.enque('the!');
console.log(queue.read());

// console.log();

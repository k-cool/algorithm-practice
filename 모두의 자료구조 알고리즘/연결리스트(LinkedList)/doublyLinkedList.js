class NodeD {
  constructor(data) {
    this.data = data;
    this.nextNode = '';
    this.prevNode = '';
  }
}

class DoublyLinkedList {
  constructor(firstNode = null, lastNode = null, length) {
    this.firstNode = firstNode;
    this.lastNode = lastNode;
    this.nodeLength = length;
  }

  consoleListFromStart() {
    let currentNode = this.firstNode;
    let currentIndex = 0;

    do {
      console.log(currentIndex, currentNode.data);
      currentNode = currentNode.nextNode;
      currentIndex++;
    } while (currentNode);
  }

  consoleListFromLast() {
    let currentNode = this.lastNode;
    let currentIndex = this.nodeLength - 1;

    do {
      console.log(currentIndex, currentNode.data);
      currentNode = currentNode.prevNode;
      currentIndex--;
    } while (currentNode);
  }

  insertAtEnd(value) {
    const newNode = new NodeD(value);
    newNode.nextNode = null;

    if (this.nodeLength === 0) {
      this.firstNode = newNode;
      this.lastNode = newNode;
    }

    newNode.prevNode = this.lastNode;
    this.lastNode.nextNode = newNode;
    this.lastNode = newNode;
    this.nodeLength++;
  }

  removeFromFront() {
    const removedNode = this.firstNode;
    this.firstNode = this.firstNode.nextNode;
    this.firstNode.prevNode = null;
    this.nodeLength--;
    return removedNode;
  }
}

const node1 = new NodeD('once');
const node2 = new NodeD('upon');
const node3 = new NodeD('a');
const node4 = new NodeD('time');

node1.prevNode = null;
node1.nextNode = node2;
node2.prevNode = node1;
node2.nextNode = node3;
node3.prevNode = node2;
node3.nextNode = node4;
node4.prevNode = node3;
node4.nextNode = null;

const DoublyList = new DoublyLinkedList(node1, node4, 4);

// DoublyList.consoleListFromLast();

// DoublyList.insertAtEnd('!');
// console.log('insertAtEnd!');

// DoublyList.consoleListFromLast();

// DoublyList.removeFromFront();
// console.log('removeFirst!');

// DoublyList.consoleListFromStart();
// console.log('---');
// DoublyList.consoleListFromLast();

module.exports = { DoublyLinkedList };

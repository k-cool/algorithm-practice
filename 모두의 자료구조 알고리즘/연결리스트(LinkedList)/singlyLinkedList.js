/*
linked list 연결리스트

*/

class NodeS {
  constructor(data) {
    this.data = data;
    this.nextNode = '';
  }
}

class SinglyLinkedList {
  constructor(firstNode) {
    this.firstNode = firstNode;
  }

  consoleList() {
    let currentNode = this.firstNode;
    let currentIndex = 0;

    do {
      console.log(currentIndex, currentNode.data);
      currentNode = currentNode.nextNode;
      currentIndex++;
    } while (currentNode);
  }

  read(index) {
    let currentNode = this.firstNode;
    let currentIndex = 0;

    while (currentIndex < index) {
      currentNode = currentNode.nextNode;
      currentIndex++;
      if (!currentNode) return null;
    }

    return currentNode.data;
  }

  search(keyWord) {
    let currentNode = this.firstNode;
    let currentIndex = 0;

    do {
      if (currentNode.data === keyWord) return currentIndex;
      currentNode = currentNode.nextNode;
      currentIndex++;
    } while (currentNode);

    return null;
  }

  insertAtList(index, value) {
    const newNode = new NodeS(value);

    if (index === 0) {
      newNode.nextNode = this.firstNode;
      return;
    }

    let currentNode = this.firstNode;
    let currentIndex = 0;

    while (currentIndex < index - 1) {
      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    newNode.nextNode = currentNode.nextNode;
    currentNode.nextNode = newNode;
    return;
  }

  deleteAtIndex(index) {
    if (index === 0) {
      this.firstNode = this.firstNode.nextNode;
      return;
    }

    let currentNode = this.firstNode;
    let currentIndex = 0;

    while (currentIndex < index - 1) {
      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    currentNode.nextNode = currentNode.nextNode.nextNode;
  }
}

const node1 = new NodeS('once');
const node2 = new NodeS('upon');
const node3 = new NodeS('a');
const node4 = new NodeS('time');

node1.nextNode = node2;
node2.nextNode = node3;
node3.nextNode = node4;

const List = new SinglyLinkedList(node1);

// console.log('read 3: ', List.read(3));
// console.log('search "time": ', List.search('time'));

List.consoleList();

List.insertAtList(3, 'purple');
console.log('insert!');
List.consoleList();

List.deleteAtIndex(3);
console.log('delete!');

List.consoleList();

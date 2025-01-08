class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.size++;
      return;
    } else {
      this.tail = newNode;
      this.tail = newNode;
    }
    let current = this.head;

    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
    this.size++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  size() {
    return this.size;
  }

  head() {
    return this.head;
  }

  tail() {
    return this.tail;
  }

  at(index) {
    let current = this.head;
    let start = 0;
    let currentNodeVal;
    while (start <= index) {
      currentNodeVal = current.value;
      current = current.nextNode;
      start++;
    }
    return currentNodeVal;
  }

  pop() {
    if (!this.head) return null;
    let current = this.head;
    let prev;
    while (current.nextNode) {
      prev = current;
      current = current.nextNode;
    }
    if (prev) {
      prev.nextNode = prev.nextNode.nextNode;
      this.size--;
    }
  }

  contains(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let index = 0;
    let current = this.head;
    while (current) {
      if (value === current.value) return index;
      current = current.nextNode;
      index++;
    }
  }

  displayList() {
    let current = this.head;
    let list = "";
    while (current !== null) {
      console.log(current.value);
      list += current.value;
      current = current.nextNode;
    }
    return list;
  }

  toString() {
    let current = this.head;
    let listString = "";
    while (current.nextNode) {
      listString += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    listString += `( ${this.tail.value} ) -> null`;
    return listString;
  }

  insertAt(value, index) {
    const newNode = new Node(value);
    let current = this.head;
    let tempPointer = 0;
    let prev;

    while (tempPointer <= index) {
      if (!current) {
        return "Linked List index is out of bounds";
      }
      if (index === tempPointer) {
        newNode.nextNode = prev.nextNode;
        prev.nextNode = newNode;
      }
      tempPointer++;
      prev = current;

      current = current.nextNode;
    }
  }
  removeAt(index) {
    let current = this.head;
    let temp = 0;
    let prev;
    if (this.size < index + 1 || index < 0) {
      return "Linked List index is out of bounds";
    }
    if (index === 0) {
      this.head = this.head.nextNode;
      return;
    }

    while (temp <= index) {
      if (temp === index) {
        if (index === this.size - 1) {
          prev.nextNode = null;
          this.tail = prev;
          this.size--;
          return;
        }
        prev.nextNode = current.nextNode;
        this.size--;
        return;
      }
      prev = current;
      current = current.nextNode;
      temp++;
    }
  }
}

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
console.log(list.removeAt(0));
console.log(list.toString());

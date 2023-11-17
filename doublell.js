class Node {
    constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    add(data) {
      const node = new Node(data);
  
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
      }
    }
  
    display() {
      let current = this.head;
  
      while (current !== null) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  const list = new DoublyLinkedList();

list.add("Alice");
list.add("Bob");
list.add("Charlie");

list.display();
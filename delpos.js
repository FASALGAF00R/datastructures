class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // ...
  
    deleteNode(value) {
      if (!this.head) {
        return; // list is empty
      }
  
      if (this.head.data === value) {
        this.head = this.head.next; // delete first node
        return;
      }
  
      let current = this.head;
      let previous = null;
      while (current && current.data !== value) {
        previous = current;
        current = current.next;
      }
  
      if (!current) {
        return; // value not found in list
      }
  
      previous.next = current.next; // delete current node
    }
  }
  
  const list = new LinkedList();
  list.prepend(1);
  list.prepend(2);
  list.prepend(3);
  list.prepend(4);
  list.prepend(5);
  console.log("Before deletion:", list.head);
  list.deleteNode(3);
  console.log("after deletion:",list.head);
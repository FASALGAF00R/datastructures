class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.frontNode = null;
      this.rearNode = null;
      this.size = 0;
    }
  
    enqueue(value) {
      const node = new Node(value);
      if (this.isEmpty()) {
        this.frontNode = node;
        this.rearNode = node;
      } else {
        this.rearNode.next = node;
        this.rearNode = node;
      }
      this.size++;
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Underflow";
      } else {
        const node = this.frontNode;
        this.frontNode = this.frontNode.next;
        if (!this.frontNode) {
          this.rearNode = null;
        }
        return node.value;
      }
    }
  
    front() {
      if (this.isEmpty()) {
        return "No elements in Queue";
      }
      return this.frontNode.value;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    printQueue() {
      let str = "";
      let curr = this.frontNode;
      while (curr) {
        str += curr.value + " ";
        curr = curr.next;
      }
      return str;
    }
  }
  // create a new queue instance
const queue = new Queue();

// enqueue some elements
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);


console.log(queue.printQueue());



// // print the queue
// console.log(queue.printQueue()); // output: "10 20 30"

// // dequeue an element
console.log(queue.dequeue()); // output: 10

// // get the front element of the queue
console.log(queue.front()); // output: 20

console.log(queue.isEmpty());
// // print the queue again to see the updated version
// console.log(queue.printQueue()); // output: "20 30"
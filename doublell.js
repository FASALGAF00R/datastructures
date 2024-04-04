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








// // when u create a linked list (head)will be empty and pointer will be null we can change 
// // this.size property is to track number of nodes in linkedlist
// isEmpty(){
// return this.size==0
// }
// // isempty is to check whether the linked list is empty
// getSize(){
//     return this.size
// }
// // to check the size of ll
// }
// const list =new linkedlist()
// console.log('list is empty',list.isEmpty());
// console.log('list size',list.getSize());


// const list = {
//     head: {
//         value: 6,
//         next: {
//             value: 10        ,                                     
//             next: {
//                 value: 12,
//                 next: {
//                     value: 3,
//                     next: null	
//                     }
//                 }
//             }
//         }
//     }
// };

// this represents single nodes



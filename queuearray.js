// class Queue {
//     constructor() {
//       this.items = [];
//     }
  
//     enqueue(element) {
//       this.items.push(element);
//     }
  
//     dequeue() {
//       if (this.isEmpty()) {
//         return "Underflow";
//       }
//       return this.items.shift();
//     }
  
//     front() {
//       if (this.isEmpty()) {
//         return "No elements in Queue";
//       }
//       return this.items[0];
//     }
  
//     isEmpty() {
//       return this.items.length === 0;
//     }
  
//     printQueue() {
//       let str = "";
//       for (let i = 0; i < this.items.length; i++) {
//         str += this.items[i] + " ";
//       }
//       return str;
//     }
//   }
//   let queue = new Queue();

// console.log(queue.isEmpty()); // true

// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);

// console.log(queue.printQueue()); // 10 20 30

// console.log(queue.front()); // 10

// console.log(queue.dequeue()); // 10

// console.log(queue.printQueue()); // 20 30

class Queue{
    constructor(){
    this.array=[];
    }
        eneque(Element){
          return   this.array.push(Element);
        }
    
    dequeue(){
        if(this.array.length===0){
            return "underflow";
        }
        return this.array.shift();
    }
    front(){
        if(this.array.length===0){
            return "no value";
        }
        return this.array[0];
    }
    isEmpty(){
        return this.array.length==0;
    }
    printQueue(){
        let str="";
        for(let i=0;i<this.array.length;i++){
            str +=this.array[i]+" ";
        }
        return str;
    }
    }

const newqueue=new Queue();
newqueue.eneque(10);
newqueue.eneque(20);
newqueue.eneque(30);
// newqueue.dequeue();
console.log(newqueue.front());
console.log(newqueue.isEmpty());
console.log(newqueue.array);
console.log(newqueue.printQueue());






















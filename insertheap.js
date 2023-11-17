class MaxHeap {
    constructor() {
      this.heap = [];
    }
    insert(value) {
      this.heap.push(value);
      this.heapifyUp(this.heap.length - 1);
    }
  
    heapifyUp(index) {
      while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (this.heap[index] > this.heap[parentIndex]) {
          [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
          index = parentIndex;
        } else {
          break;
        }
      }
    }
  
   
    printHeap() {
      console.log(this.heap);
    }
  }
  

  const maxHeap = new MaxHeap();
  maxHeap.insert(10);
  maxHeap.insert(5);
  maxHeap.insert(17);
  maxHeap.insert(8);
  maxHeap.insert(25);
  
  maxHeap.printHeap(); 
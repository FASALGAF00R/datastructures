// class MinHeap {
//     constructor() {
//       this.heap = [];
//     }
  
//     parent(i) {
//       return Math.floor((i - 1) / 2);
//     }
  
//     leftChild(i) {
//       return 2 * i + 1;
//     }
  
//     rightChild(i) {
//       return 2 * i + 2;
//     }
  
//     swap(i, j) {
//       const temp = this.heap[i];
//       this.heap[i] = this.heap[j];
//       this.heap[j] = temp;
//     }
  
//     insert(value) {
//       this.heap.push(value);
//       this.heapifyUp(this.heap.length - 1);
//     }
//     heapifyUp(index) {
//         let currentIndex = index;
//         let parentIndex = this.parent(currentIndex);
    
//         while (
//           currentIndex > 0 &&
//           this.heap[currentIndex] < this.heap[parentIndex]
//         ) {
//           this.swap(currentIndex, parentIndex);
//           currentIndex = parentIndex;
//           parentIndex = this.parent(currentIndex);
//         }
//       }
    
//       display() {
//         console.log(this.heap);
//       }
//     }
    

//     const H = new MinHeap();
//     H.insert(5);
//     H.insert(8);
//     H.insert(10);
//     H.insert(4);
//     H.insert(7);
//     H.display(); 


 class MinHeap{
  constructor(){
    this.heap=[];
  }
  parent(i){
    return Math.floor((i-1)/2);
  }
  leftchild(i){
    return 2*i+1;
  }
  rightchild(i){
    return 2*i+2;
  }
  swap(i,j){
    let temp=this.heap[i];
    this.heap[i]=this.heap[j];
    this.heap[j]=temp;
  }
  insert(value){
    this.heap.push(value);
    this.heapifyup(this.heap.length-1);
  }
  heapifyup(index){
    let currentIndex=index;
    let parentindex=this.parent(currentIndex);
    while(
      currentIndex>0&&
      this.heap[currentIndex]<this.heap[parentindex]
    ){
      this.swap(currentIndex,parentindex);
      currentIndex=parentindex;
      parentindex=this.parent(currentIndex); 
    }
  }
 display(){
  console.log(this.heap);
 }
  }
const h=new MinHeap();
h.insert(3);
h.insert(6);
h.insert(1);
h.insert(0);
h.display();

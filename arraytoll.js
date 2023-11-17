class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
function arrayToLinkedList(arr) {
    if (arr.length === 0) {
        return null;
      }
    const head = new Node(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new Node(arr[i]);
        current = current.next;
    }
    return head;
  }
  const arr = [1, 2, 3, 4, 5];
  const linkedList = arrayToLinkedList(arr);
  
  let current = linkedList;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }


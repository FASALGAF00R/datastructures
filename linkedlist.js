class node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
// // nodeclass
class linkedlist{
    constructor(){
        this.head=null;
    }
    insertFirst(data){
        this.head=new node(data,this.head);
    }
}
const ll=new linkedlist();
ll.insertFirst(100);
console.log(ll);

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
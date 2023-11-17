class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class linkedlist{
    constructor(){
        this.head=null
    }
prepend(data){
    const newNode=new Node(data);
    if(!this.head){
        this.head=newNode;
    }else{
    newNode.next=this.head;
    this.head=newNode;
}
}
}
const list =new linkedlist();
list.prepend(1);
list.prepend(2);
list.prepend(3);
list.prepend(4);
list.prepend(5);
var current =list.head;
while(current){
    console.log(current.data);
    current=current.next;
}








// class node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
// }
// class linkedlist{
//     constructor(){
//         this.head=null;
//     }
//     addtofrant(data){
// const newnode=new node(data);
// newnode.next=this.head;
// this.head=newnode;
//     }
// displaylist(){
//     let current=this.head;
//     while(current!==null){
//         console.log(current.data);
//         current=current.next;
//     }
// }
// }
// const list=new linkedlist();
// list.addtofrant(1);
// list.addtofrant(2);
// list.addtofrant(3);
// list.addtofrant(4);
// list.displaylist();

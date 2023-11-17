class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class linkedlist{
constructor(){
    this.head=null;
    this.tail=null;
}
addnode(value){
    const newNode=new Node(value);
    if(!this.head){
        this.head=newNode;
    }else{
        this.tail.next=newNode;
    }
    this.tail=newNode;
}
deletefrant(value){
if(!this.head){
    return null;
}else{
    this.head=this.head.next;
}
}
display(){
    if(!this.head){
        console.log("empty");
    }else{
    let current=this.head;
    while(current){
    console.log(current.value);
    current=current.next;
    }
}
}
}
const list=new linkedlist()
list.addnode(10);
list.addnode(20);
list.addnode(30);
list.deletefrant();
list.display();
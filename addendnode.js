
class Node{
    constructor(value){
this.value=value;
this.next=null;
    }
}
class linkedlist{
    constructor(){
        this.head=null
    }
    append(value){
        const newNode=new Node(value);
        if(!this.head){
            this.head=newNode;
        }else{
            let current=this.head;
            while(current.next){
                current=current.next;
            }
            current.next=newNode;
        }
    }
}
const list=new linkedlist();
list.append(10);
list.append(20);
list.append(30);
console.log(list.head);
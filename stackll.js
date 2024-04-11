class stackNode{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class stack{
    constructor(){
        this.top=null;
    }
    
    push(data){
        const newNode=new stackNode(data);
        newNode.next=this.top;
        this.top=newNode;
    }
    pop(){
        if(this.top==null){
            return null;
        }
        const popnode=this.top;
        this.top=this.top.next;
        return popnode.data
    }
    isEmpty(){
        return this.top==null;
    }
    peek(){
        return this.top?this.top.data:null;
    }
    getSize(){
   let size=0
   let curr=this.top
   while(curr!=null){
    size++
    curr=curr.next
   }
   return size
    }

    isFull() {
        return this.top === this.size - 1;
      }    
    display(){
        let current=this.top;
        while(current!=null){
            console.log(current.data);
            current=current.next;
        }
    }
}
const mystack=new stack();
mystack.push(10);
mystack.push(60);
mystack.push(30);
mystack.push(40);
mystack.pop()
console.log("peak element is:",mystack.peek());
// console.log(mystack.getSize());
console.log(mystack.isFull());

mystack.display()





























// class stacknode{
//     constructor(data){
//     this.data=data;
//     this.next=null;
//     }
//     }
//     class stack{
//     constructor(){
//     this.top=null;
//     }
//     push(data){
//     const newnode=new stacknode(data);
//     newnode.next=this.top
//     this.top=newnode;
//     }
//     pop(){
//     if(this.top==null){
//     return null;
//     }else{
//     const popnode=this.top;
//     this.top=this.top.next;
//     return popnode.data;
//     }
//     }
// }
//     const mystack=new stack();
//     mystack.push(10);
//     mystack.push(20);
//     mystack.push(30);
//     mystack.pop();
//     console.log(mystack.top);
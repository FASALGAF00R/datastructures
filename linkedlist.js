
class node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev=null
    }
}

class linkedlist {
    constructor() {
        this.head = null
    }
    insertone(data) {
        const newnode = new node(data)
        if(this.head===null){
         this.head=newnode            
        }else{
            this.head.prev=newnode
            newnode.next = this.head
            this.head = newnode

        }
    }

    print(){
        let sum=0
        let curr=this.head
        let res='';
        while(curr!==null){
            res+=curr.value+'->'
      
            curr=curr.next

        }
        res+='null'
        console.log(res);
    }
    reverse() {
        let prev = null
        let curr = this.head
        let next = null
        while (curr !== null) {
            next=curr.next
            curr.next=prev
            prev=curr
            curr=next
         }
         this.head=prev
        }
    }

const ll = new linkedlist()
ll.insertone(2)
ll.insertone(4)

ll.print()









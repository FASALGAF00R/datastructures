const { log } = require("console")

class node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class linkedlist {
    constructor() {
        this.head = null

    }
    insertnode(data) {
        const newnode = new node(data)
        newnode.next = this.head
        this.head = newnode
    }
    reverse(){
        let prev=null
        let current=this.head
        let next=null
        while(current!==null){
            next=current.next
            current.next=prev
            current=next
        }
        this.head=prev
    }


}

const ll = new linkedlist()
ll.insertnode(3)
ll.insertnode(2)
ll.insertnode(5)
ll.insertnode(10)
console.log(ll);
11.reverse()

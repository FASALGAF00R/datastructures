
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
    insertone(data) {
        const newnode = new node(data)
        newnode.next = this.head
        this.head = newnode
    }

    print(){
        let curr=this.head
        let res='';
        while(curr!==null){
            res+=curr.value+'->'
            curr=curr.next
        }
        res+='null';
        console.log(res);
    }
    


}
const ll = new linkedlist()
ll.insertone(3)
ll.insertone(4)
ll.insertone(5)

ll.print()






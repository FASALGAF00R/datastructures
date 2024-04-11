class node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class linkedlist{
    constructor(){
        this.head=null
    }
    insert(value){
        const newnode =new node(value)
        newnode.next=this.head
        this.head=newnode
    }
    print(){
        let curr=this.head
        let res=''
        while(curr!=null){
                res+=curr.value+'->'
                curr=curr.next
            }
            res+='null'
            console.log(res);
        
    }
    reverse(){
        let curr=this.head
        let prev=null
        let next=null
        while(curr!=null){
            next=curr.next
            curr.next=prev
            prev=curr
            curr=next
        }
        this.head=prev
    }
}

const ll=new linkedlist()
ll.insert(4)
ll.insert(1)
ll.insert(2)
ll.insert(3)
ll.print()
// ll.reverse()
// ll.print()

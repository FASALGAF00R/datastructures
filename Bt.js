class treenode{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class bt{
    constructor(){
        this.root=null
    }
    insert(value){
        const newnode=new treenode(value)
        if(!this.root){
            this.root=newnode
        }else{
            this.insertnode(this.root,newnode)
        }
    }

    insertnode(node,newnode){
        if(newnode.value <node.value){
            if(!node.left){
                node.left=newnode
            }else{
                this.insertnode(node.left,newnode)
            }
        }else{
            if(!node.right){
                node.right=newnode
            }else{
                this.insertnode(node.right,newnode)
            }
        }
    }

}

const binarytree=new bt()
binarytree.insert(5)
binarytree.insert(6)
binarytree.insert(2)
binarytree.insert(3)
binarytree.insert(1)

console.log(binarytree.root);
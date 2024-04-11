class treenode{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class bst{
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

    preOrderTraversal(node = this.root) {
        if (node) {
            console.log(node.value); // Display the value of the current node
            this.preOrderTraversal(node.left); // Recursively traverse the left subtree
            this.preOrderTraversal(node.right); // Recursively traverse the right subtree
        }
    }
}



const binarystree=new bst()
binarystree.insert(6)
binarystree.insert(2)
binarystree.insert(5)
binarystree.insert(3)
binarystree.insert(1)

binarystree.preOrderTraversal();

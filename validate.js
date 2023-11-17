class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
insert(value){
    const newNode=new Node(value);
    if(this.root==null){
        this.root=newNode;
    }else{
        this.insertnode(this.root,newNode);
    }
}
insertnode(root,newNode){
    if(newNode.value<root.value){
        if(root.left==null){
          root.left=newNode;
        }else{
          this.insertnode(root.left,newNode);
        }
    }else{
      if(root.right==null){
        root.right=newNode;
      }else{
        this.insertnode(root.right,newNode);
      }
    }
}
isBST(){
  const values=[];
  this.inordertraversal(this.root,values);
  for(let i=1;i<values.length;i++){
   if( values[i]<=values[i-1]){
   return false;
  }
}
return true;
}
inordertraversal(node,values){
  if(node!=null){
    this.inordertraversal(node.left,values);
    values.push(node.value);
    this.inordertraversal(node.right,values);
  }
}
}
const b=new BST();
b.insert(10);
b.insert(5);
b.insert(4);
b.insert(2);
b.insert(3);
console.log(b.isBST());


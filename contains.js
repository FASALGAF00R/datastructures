class node{
  constructor(value){
    this.value=value;
    this.left=null;
    this.right=null;
  }
}
class bst{
  constructor(){
    this.root=null;
  }
insert(value){
  const newNode=new node(value);
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
      this.insertnode(root.left,newNode)
    }
  }else{
    if(root.right==null){
      root.right=newNode;
    }else{
      this.insertnode(root.right,newNode)
    }
  }
}
contains(value) {
    return this.containsNode(this.root, value);
  }

  containsNode(node, value) {
    if (node === null) {
      return false;
    }

    if (value === node.value) {
      return true;
    } else if (value < node.value) {
      return this.containsNode(node.left, value);
    } else {
      return this.containsNode(node.right, value);
    }
  }
}
const b=new bst();
b.insert(10);
b.insert(5);
b.insert(6);
b.insert(4);
b.insert(3);
console.log(b.contains(6));
console.log(b.contains(1));

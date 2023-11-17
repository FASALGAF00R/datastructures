// class Node {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
//   }
  
//   class BinarySearchTree {
//     constructor() {
//       this.root = null;
//     }
  
//     insert(value) {
//       const newNode = new Node(value);
  
//       if (this.root === null) {
//         this.root = newNode;
//       } else {
//         this.insertNode(this.root, newNode);
//       }
//     }
  
//     insertNode(node, newNode) {
//       if (newNode.value < node.value) {
//         if (node.left === null) {
//           node.left = newNode;
//         } else {
//           this.insertNode(node.left, newNode);
//         }
//       } else {
//         if (node.right === null) {
//           node.right = newNode;
//         } else {
//           this.insertNode(node.right, newNode);
//         }
//       }
//     }
//     display() {
//       this.displayNode(this.root);
//     }
// displaynode(node){
//   if(node!==null){
//     this.displayNode(node.left);
//     console.log(node.value);
//     this.displayNode(node.right);

//   }
// }
//   }
  

//   const bst = new BinarySearchTree();
//   bst.insert(8);
//   bst.insert(3);
//   bst.insert(10);
//   bst.insert(1);
//   bst.insert(6);
//   bst.insert(14);
// bst.display();


// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }

//   insert(value) {
//     const newNode = new Node(value);

//     if (this.root === null) {
//       this.root = newNode;
//     } else {
//       this.insertNode(this.root, newNode);
//     }
//   }

//   insertNode(node, newNode) {
//     if (newNode.value < node.value) {
//       if (node.left === null) {
//         node.left = newNode;
//       } else {
//         this.insertNode(node.left, newNode);
//       }
//     } else {
//       if (node.right === null) {
//         node.right = newNode;
//       } else {
//         this.insertNode(node.right, newNode);
//       }
//     }
//   }

//   display() {
//     this.displayNode(this.root);
//   }

//   displayNode(node) {
//     if (node !== null) {
//       this.displayNode(node.left);
//       console.log(node.value);
//       this.displayNode(node.right);
//     }
//   }
// }

// const bst = new BinarySearchTree();
// bst.insert(8);
// bst.insert(3);
// bst.insert(10);
// bst.insert(1);
// bst.insert(6);
// bst.insert(14);

// bst.display();

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
display(){
  this.displaynode(this.root);
}
displaynode(node){
  if(node!==null){
    this.displaynode(node.left);
    console.log(node.value);
    this.displaynode(node.right);
  }
}
}
const b=new bst();
b.insert(10);
b.insert(5);
b.insert(6);
b.insert(4);
b.insert(3);
console.log();
b.display();


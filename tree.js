// class TreeNode {
//     constructor(value) {
//       this.value = value;
//       this.children = [];
//     }
  
//     addChild(node) {
//       this.children.push(node);
//     }
//   }
  
//   // Example usage
//   const rootNode = new TreeNode(1);
//   const childNode1 = new TreeNode(2);
//   const childNode2 = new TreeNode(3);
//   const grandchildNode = new TreeNode(4);
  
//   rootNode.addChild(childNode1);
//   rootNode.addChild(childNode2);
//   childNode2.addChild(grandchildNode);
//   console.log(rootNode);

class treenode{
  constructor(value){
    this.value=value;
    this.child=[];
  }
addchild(node){
  this.child.push(node);
}
}
const rootNode=new treenode(1);
const child1=new treenode(2);
const child2=new treenode(3);
const grandchild=new treenode(4);

rootNode.addchild(child1);
rootNode.addchild(child2);
child2.addchild(grandchild);
console.log(rootNode);







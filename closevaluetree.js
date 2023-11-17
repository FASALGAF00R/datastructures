class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new Node(value);
  
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    findClosestValue(target) {
      if (this.root === null) {
        return null;
      }
  
      let closest = this.root.value;
      let currentNode = this.root;
  
      while (currentNode !== null) {
        if (Math.abs(target - currentNode.value) < Math.abs(target - closest)) {
          closest = currentNode.value;
        }
  
        if (target < currentNode.value) {
          currentNode = currentNode.left;
        } else if (target > currentNode.value) {
          currentNode = currentNode.right;
        } else {
        
          return currentNode.value;
        }
      }
  
      return closest;
    }
  }
  
  
  const bst = new BinarySearchTree();
  bst.insert(8);
  bst.insert(3);
  bst.insert(10);
  bst.insert(1);
  bst.insert(6);
  bst.insert(14);
  
  console.log(bst.findClosestValue(7)); 
  console.log(bst.findClosestValue(12));
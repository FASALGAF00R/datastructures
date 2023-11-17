class TreeNode {
    constructor(value) {
      this.val = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function isBST(root) {
    return isBSTHelper(root, null, null);
  }
  

  function isBSTHelper(node, min, max) {

    if (node === null) {
      return true;
    }
  
   
    if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
      return false;
    }
  
    
    return (
      isBSTHelper(node.left, min, node.val) &&
      isBSTHelper(node.right, node.val, max)
    );
  }
  
  
  const root = new TreeNode(4);
  root.left = new TreeNode(2);
  root.right = new TreeNode(6);
  root.left.left = new TreeNode(1);
  root.left.right = new TreeNode(3);
  root.right.left = new TreeNode(5);
  root.right.right = new TreeNode(7);
  
  
  const isValidBST = isBST(root);
  console.log(isValidBST); 
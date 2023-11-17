delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(node, value) {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
    } else {
      // Case 1: Node to be deleted has no children
      if (node.left === null && node.right === null) {
        node = null;
      }
      // Case 2: Node to be deleted has only one child
      else if (node.left === null) {
        node = node.right;
      } else if (node.right === null) {
        node = node.left;
      }
      // Case 3: Node to be deleted has two children
      else {
        const minRight = this.findMinNode(node.right);
        node.value = minRight.value;
        node.right = this.deleteNode(node.right, minRight.value);
      }
    }

    return node;
  }

  findMinNode(node) {
    if (node.left === null) {
      return node;
    }
    return this.findMinNode(node.left);
  }
}
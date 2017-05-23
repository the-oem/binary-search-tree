class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(node){
    if (!this.root) {
      this.root = node;
      return;
    }

    const current = this.root;
    let isInserted = false;

    // Traverse
    while (!isInserted) {
      if (node.data <= current.data) {
        if (!current.data.left) {
          current.setLeftChild(node);
          isInserted = true;
        } else {
          current = current.left;
        }
      } else if (node.data > current.data){
        if (!current.data.right) {
          current.setRightChild(node);
          isInserted = true;
        } else {
          current = current.right;
        }
      }
    }
  }
}

module.exports = BinaryTree;

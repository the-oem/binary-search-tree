class Node {
  constructor(data, left = null, right = null){
    this.data = data;
    this.left = left;
    this.right = right;
  }

  setLeftChild(node){
    this.left = node;
  }

  setRightChild(node){
    this.right = node;
  }
}

module.exports = Node;

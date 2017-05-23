const chai = require('chai');
const expect = chai.expect;
const Node = require('../Node.js');

describe('Node', () => {
    it('should have a data property', () => {
      let node = new Node(10);

      expect(node.data).to.equal(10);
    });

    it('should have a default null value for left and right nodes', () => {
      let node = new Node(10);

      expect(node.left).to.be.null;
      expect(node.right).to.be.null;
    });

    it('can assign a left node', () => {
      let leftNode = new Node(8);
      let parentNode = new Node(10, leftNode);

      expect(parentNode.left).to.deep.equal(leftNode);

      let otherLeftNode = new Node(7);

      leftNode.setLeftChild(otherLeftNode);
      expect(leftNode.left).to.deep.equal(otherLeftNode);
    });

    it('can assign a right node', () => {
      let rightNode = new Node(11);
      let parentNode = new Node(10, null ,rightNode);

      expect(parentNode.right).to.deep.equal(rightNode);

      let otherRightNode = new Node(12);

      rightNode.setRightChild(otherRightNode);
      expect(rightNode.right).to.deep.equal(otherRightNode);
    });
});

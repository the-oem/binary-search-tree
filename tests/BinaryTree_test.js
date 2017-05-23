const chai = require('chai');
const expect = chai.expect;
const BinaryTree = require('../BinaryTree.js');
const Node = require('../Node.js');

describe('BinaryTree', () => {
  let tree;

  beforeEach(() => {
    tree = new BinaryTree();
  });

  it('should have a root node defaulted to null', () => {
    let tree = new BinaryTree();

    expect(tree.root).to.be.null;
  });

  describe('INSERT', () => {
    it('should be able to add a node to the Tree', () => {
      let node = new Node(10);

      tree.insert(node);
      expect(tree.root).to.deep.equal(node);
    });

    it('should move smaller data to the left', () => {
      let node1 = new Node(10);
      let node2 = new Node(9);

      tree.insert(node1);
      tree.insert(node2);
      expect(tree.root.left).to.deep.equal(node2);
      console.log(node1, node2);
    });

    it('should move larger data to the right', () => {
      let node1 = new Node(10);
      let node2 = new Node(11);

      tree.insert(node1);
      tree.insert(node2);
      expect(tree.root.right).to.deep.equal(node2);
      console.log(node1, node2);
    });

    it.skip('should add data equal to the rootNode to the left', () => {

    });

    it.skip('should continue adding smaller data to the left down the tree', () => {

    });

    it.skip('should continue adding larger data to the right down the tree', () => {

    });

    it.skip('creates a tree structure wit.skiph multiple nodes', () => {

    });

});

  describe('FIND', () => {

    beforeEach(() => {
      tree.push(5);
    });

    it.skip('should find a match if node exists', () => {

    });

    it.skip('should return null if no match is found', () => {

    });

    beforeEach(() => {

              tree.push(4);
              tree.push(6);
              tree.push(7);
              tree.push(2);
              tree.push(3);
              tree.push(5);
              tree.push(1);
    });

    it.skip('should be able to find the root', () => {

    });

    it.skip('should be able to find results to the immediate left (2)', () => {

    });

    it.skip('should be able to find results to the far left (1)', () => {

    });

    it.skip('should be able to find results to the immediate right (6)', () => {

    });

    it.skip('should be able to find nested results (5 and 3)', () =>  {

    });

  });

  describe('toArray', () => {
    it.skip('should return an empty array if no nodes exist', () => {

    });

    it.skip('should return data from the tree into an array, starting with the root, then all left values, then all right', () => {
      tree.push(5);
      tree.push(4);
      tree.push(6);
      tree.push(7);
      tree.push(3);
    });
  });

  describe('SORT', () => {
    it.skip('should return an empty array if no nodes exist', () => {

    });

    it.skip('should return a sorted array of tree elements, small to large', () => {
      tree.push(5)
      tree.push(4)
      tree.push(6)
      tree.push(7)
      tree.push(3)
      tree.push(2)
      tree.push(2102)
    });
  });

  describe('MIN and MAX', () => {

    it.skip('min should return null if no nodes exist', () => {

    });

    it.skip('max should return null if no nodes exist', () => {

    });

    beforeEach(() => {
      tree.push(4);
      tree.push(6);
      tree.push(7);
      tree.push(2);
      tree.push(3);
      tree.push(5);
      tree.push(1);
    });

    it.skip('should find the min value', () => {

    });

    it.skip('should find the max value', () => {

    });
  });

  describe('DELETE', () => {

  })

  describe('getCount', () => {

  });

  describe('getSum', () => {

  });


  describe('getLevelofNode', () => {
    //returns how may levels down from root node the searched value is
  });

  describe('getLevelofNode', () => {
    //returns how may levels down from root node the searched value is
  });
});

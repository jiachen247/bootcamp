// JavaScript program to check whether a
// given Binary Tree is Perfect or not

// Helper class that allocates a new
// node with the given key and None
// left and right pointer.
class newNode {
  constructor(k) {
    this.key = k;
    this.right = this.left = null;
  }
}

// This functions gets the size of binary tree
// Basically, the number of nodes this binary tree has
function getSize(root) {
  return root === null ? 0 : 1 + getSize(root.left) + getSize(root.right);
}

// This functions gets height or the max depth of the binary tree
function getHeight(root) {
  return root === null
    ? 0
    : 1 + Math.max(getHeight(root.left), getHeight(root.right));
}

// Returns True if length of binary tree is a power of 2 else False
function isPerfect(root) {
  let height = getHeight(root);
  let size = getSize(root);
  return size == Math.pow(2, height) - 1;
}

// Driver Code
let root = null;
root = new newNode(10);
root.left = new newNode(20);
root.right = new newNode(30);

root.left.left = new newNode(40);
root.left.right = new newNode(50);
root.right.left = new newNode(60);
root.right.right = new newNode(70);

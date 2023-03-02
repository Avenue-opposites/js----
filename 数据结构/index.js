import{ Tree,AVLTree } from './src/Tree.js';
const tree = new AVLTree();

tree.insert(6);
tree.insert(9);
tree.insert(3);
tree.insert(10);
tree.insert(7);
tree.insert(8);

// console.log(AVLTree.isBalance(tree.root));
// tree.root = AVLTree.rightToLeftRotation(tree.root);
console.log(AVLTree.isBalance(tree));
// console.log(tree.getDistanceAtTreeNode(4));
// console.log(Tree.calculateHeight(tree.root));
console.log(tree);
// Vertical Order Traversal of Binary Tree

// Given a binary tree, return the vertical order traversal of its nodes values.
// For each node at position (X, Y), its left and right children respectively will be at positions (X-1, Y-1) and (X+1, Y-1).
// Running a vertical line from X = -infinity to X = +infinity, whenever the vertical line touches some nodes, we report the values of the nodes in order from top to bottom (decreasing Y coordinates).
// If two nodes have the same position, then the value of the node that is reported first is the value that is smaller.
// Return an list of non-empty reports in order of X coordinate.  Every report will have a list of values of nodes.

/*
    Example 1:
    Input: [3,9,20,null,null,15,7]
    Output: [[9],[3,15],[20],[7]]
    Explanation: 
    Without loss of generality, we can assume the root node is at position (0, 0):
    Then, the node with value 9 occurs at position (-1, -1);
    The nodes with values 3 and 15 occur at positions (0, 0) and (0, -2);
    The node with value 20 occurs at position (1, -1);
    The node with value 7 occurs at position (2, -2).
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    insertArray(arr) {
        let n = arr.length;
        this.root = insert(arr, root, 0, n);
    }
    
    verticalTraversal() {
        let result = [];
        let current = this.root;
        let leftBound = findLeft(current);
        let traverse = function(node, x, y) {
            if (result[x-leftBound]) {
                result[x-leftBound].push(node.value);
            } else {
                result[x-leftBound] = [node.value];
            }
            if (node.left !== null) {
                traverse(node.left, x-1, y-1);
            }
            if (node.right!== null) {
                traverse(node.right, x+1, y-1);
            }
        }
        traverse(current, 0, 0);
        return result;
    };

    verticalTraversal() {
        let result = [];
        let current = this.root;
        let leftBound = findLeft(current);
        let traverse = function(node, x, y) {
            if (result[x-leftBound]) {
                result[x-leftBound].push(node.value);
            } else {
                result[x-leftBound] = [node.value];
            }
            if (node.left !== null) {
                traverse(node.left, x-1, y-1);
            }
            if (node.right!== null) {
                traverse(node.right, x+1, y-1);
            }
        }
        traverse(current, 0, 0);
        return result;
    };
}

const insert = function(arr, node, i , n) {
    if ( i < n) {
        if (arr[i] !== null) {
            let temp = new TreeNode(arr[i]);
            node = temp;
            node.left = insert(arr, node.left, 2 * i + 1, n);
            node.right = insert(arr, node.right, 2 * i + 2, n);
        }
    }
    return node;
}

const findLeft = function(node) {
    let x = 0;
    let current = node;
    while (current.left) {
        if (current.left !== null) x--;
        current = current.left;
    }
    return x;
}

let tree = new Tree();
tree.insertArray([3,9,20,null,null,15,7]);
tree.verticalTraversal();
let tree2 = new Tree();
tree2.insertArray([1,2,3,4,5,6,7]);
tree2.verticalTraversal();


// Not complete
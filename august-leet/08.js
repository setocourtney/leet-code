// Path Sum

// You are given a binary tree in which each node contains an integer value.
// Find the number of paths that sum to a given value.
// The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).
// The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.

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
    
    // return total number of paths in tree that result in sum
    pathSum(sum) {
        let current = this.root;
        if (this.root === null) return 0;      

        let getSum = function(node, currentSum) {
            if (node === null) return 0; // end recurrsion, node is null
            let currentVal = currentSum+=node.value; // increment currentSum
            let isSum = currentVal === sum ? 1 : 0; // check if currentSum === sum
            let total = isSum + getSum(node.left, currentVal) + getSum(node.right, currentVal);
            return total // check sum of left and right nodes
        }

        let traverseTree = function(node) {
            if (node === null) return 0; // end recurrsion, node is null
            return getSum(node, 0) + traverseTree(node.left) + traverseTree(node.right); //call getSum on left and right
        }
        return traverseTree(current);
    }
}

// insert helper function
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


let tree = new Tree();
tree.insertArray([10,5,-3,3,2,null,11,3,-2,null,1]);
console.log(tree.pathSum(8));


/* ------------------------------------------------------------------------ */
/*  Result: 76%
    Runtime:
        best case: O(2n)
        worst case: O(2n)
        average case: O(2n)
    Space: O(1)
    Time to Complete: 60 min

*/

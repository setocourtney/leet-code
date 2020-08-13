// Trees

// Root = starting point
// Node = single point of a tree
// Childre = nodes connected to a parent node
// Branch = connected nodes

/*** Fun Fact:  HTML DOM is a tree ***/

// Uses: 
//     * JSON Parsing
//     * Decision making

/* ------------------------------------------------------------ */

// -- Binary Tree --

// * Each node can only have at most two children
// * Sorted in order: everything to the left must be less than current node, everything to the right must be greater

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;   
    }

    // insertion
    // create new node -> start at root -> move left / right depending on value -> add as right or left if there is no value

    insert(value) {
        var newNode = new Node(value);
        if (this.root === null) {
            //set empty node
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while (true) {
                if (value === current.value) return this;
                if (value < current.value) {
                    // go left
                    if (current.left === null) {
                        // set empty node
                        current.left = newNode;
                        return this;
                    } else {
                        // update current
                        current = current.left;
                    }
                } else {
                    // value is greater than current node
                    // go right
                    if (current.right === null) {
                        // set empty node
                        current.right = newNode;
                        return this;
                    } else {
                        // update current
                        current = current.right;
                    }
                }
            }
        }
    }

    // searching
    // traverse
    find(value) {
        if (this.root === null) return false;
        var current = this.root;
        var found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }    

    // contains
    find(value) {
        if (this.root === null) return undefined;
        var current = this.root;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }    
}





var tree = new BST();
tree.root = new Node(10);



/* ------------------------------------------------------------ */


// -- Trees --

// Breadth First Search (BFS) -- Horizontal

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(root) {
        this.root = root;
    }

    bfs() {
        let q = [this.root];
        let result = [];
        let current = this.root;
        while (queue.length) {
            current = q.shift();
            result.push(current);
            if (current.left) q.push(node.left);
            if (current.right) q.push(node.right);
        }
        return result;
    }


}

// Depth First Search (DFS) -- Vertical

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(root) {
        this.root = root;
    }

    // PreOrder - Middle, Left, Right
    dfsPre() {
        let result = [];
        let current = this.root;
        let traverse = function(node) {
            result.push(node);
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                htraverse(node.right);
            }
        }
        traverse(this.root);
        return result;
    }

}


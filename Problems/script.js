    class TreeNode {
        constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        }
    }
    
    class BinarySearchTree {
        constructor() {
        this.root = null;
        }
    
        insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
        }
    
        _insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
            node.left = newNode;
            } else {
            this._insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
            node.right = newNode;
            } else {
            this._insertNode(node.right, newNode);
            }
        }
        }
    
        delete(value) {
        this.root = this._deleteNode(this.root, value);
        }
    
        _deleteNode(node, value) {
        if (!node) {
            return null;
        }
    
        if (value < node.value) {
            node.left = this._deleteNode(node.left, value);
        } else if (value > node.value) {
            node.right = this._deleteNode(node.right, value);
        } else {
            if (!node.left && !node.right) {
            node = null;
            } else if (!node.left) {
            node = node.right;
            } else if (!node.right) {
            node = node.left;
            } else {
            const minNode = this._findMinNode(node.right);
            node.value = minNode.value;
            node.right = this._deleteNode(node.right, minNode.value);
            }
        }
    
        return node;
        }
    
        _findMinNode(node) {
        while (node.left) {
            node = node.left;
        }
        return node;
        }
    
        search(value) {
        return this._searchNode(this.root, value);
        }
    
        _searchNode(node, value) {
        if (!node) {
            return false;
        }
    
        if (value === node.value) {
            return true;
        } else if (value < node.value) {
            return this._searchNode(node.left, value);
        } else {
            return this._searchNode(node.right, value);
        }
        }
    
        inOrderTraversal() {
        const result = [];
        this._inOrder(this.root, result);
        return result;
        }
    
        _inOrder(node, result) {
        if (node) {
            this._inOrder(node.left, result);
            result.push(node.value);
            this._inOrder(node.right, result);
        }
        }
    
        preOrderTraversal() {
        const result = [];
        this._preOrder(this.root, result);
        return result;
        }
    
        _preOrder(node, result) {
        if (node) {
            result.push(node.value);
            this._preOrder(node.left, result);
            this._preOrder(node.right, result);
        }
        }
    
        postOrderTraversal() {
        const result = [];
        this._postOrder(this.root, result);
        return result;
        }
    
        _postOrder(node, result) {
        if (node) {
            this._postOrder(node.left, result);
            this._postOrder(node.right, result);
            result.push(node.value);
        }
        }
    }
    
    // Example usage
    const bst = new BinarySearchTree();
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    bst.insert(2);
    bst.insert(4);
    bst.insert(6);
    bst.insert(8);
    
    console.log(bst.inOrderTraversal());   // [2, 3, 4, 5, 6, 7, 8]
    console.log(bst.preOrderTraversal());  // [5, 3, 2, 4, 7, 6, 8]
    console.log(bst.postOrderTraversal()); // [2, 4, 3, 6, 8, 7, 5]
    
    bst.delete(5);
    console.log(bst.inOrderTraversal());   // [2, 3, 4, 6, 7, 8]
    
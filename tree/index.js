const compare = {
    less: 0,
    bigger: 1,
    equal: -1 
}
class Node {
    constructor(key) {
        this.key = key
        this.left = null
        this.right = null
    }
}
class BST {
    constructor() {
        this.root = null
    }
    compareFun(a, b) {
        if(a === b) return compare.equal
        return a < b ? compare.less : compare.bigger
    }
    insert(key) {
        let node = new Node(key)
        if(this.root === null) {
            this.root = new Node(key)
        } else {
            this.insertNode(this.root, key)
        }
    }
    insertNode(node, key) {
        const newNode = new Node(key)
        if(this.compareFun(node.key, key) === compare.bigger) {
            if(node.left === null) {
                node.left = newNode
            } else {
                this.insertNode(node.left, key)
            }
        } else {
            if(node.right === null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, key)
            }
        }
    }
    // 中序遍历
    inOrderMap(callback) {
        this.inOrderMapNode(this.root, callback)
    }
    inOrderMapNode(node, callback) {
        if(node !== null) {
            this.inOrderMapNode(node.left, callback)
            callback(node)
            this.inOrderMapNode(node.right, callback)
        }
        
    }
    // 前序遍历
    preOrderMap(callback) {
        this.preOrderMapNode(this.root, callback)
    }
    preOrderMapNode(node, callback) {
        if(node !== null) {
            callback(node)
            this.preOrderMapNode(node.left, callback)
            this.preOrderMapNode(node.right, callback)
        }
    }
    // 后续遍历
    postOrderMap(callback) {
        this.postOrderMapNode(this.root, callback)
    }
    postOrderMapNode(node, callback) {
        if(node !== null) {
            this.postOrderMapNode(node.left, callback)
            this.postOrderMapNode(node.right, callback)
            callback(node)
        }
    }
    min() {
        return this.minNode(this.root)
    }
    minNode(node) {
        let current = node
        while(current && current.left) {
            current = current.left
        }
        return current
    }
    max() {
        return this.maxNode(this.root)
    }
    maxNode(node) {
        let current = node
        while(current && current.right) {
            current = current.right
        }
        return current
    }
    search(key) {
        return this.searchNode(this.root, key)
    }
    searchNode(node, key) {
        if(!node) {
            return false
        }
        if(this.compareFun(key, node.key) === compare.less) {
            return this.searchNode(node.left, key)
        } else if(this.compareFun(key, node.key) === compare.bigger){
            return this.searchNode(node.right, key)
        } else {
            return true
        }
    }
    remove(key) {
        this.root = this.removeNode(this.root, key)
    }
    removeNode(node, key) {
        if(!node) {
            return null
        }
        if(this.compareFun(key, node.key) === compare.less) {
            node.left = this.removeNode(node.left, key)
            return node
        } else if(this.compareFun(key, node.key) === compare.bigger) {
            node.right = this.removeNode(node.right, key)
            return node
        } else {
            if(!node.left && !node.right) {
                node = null
                return node
            }
            if(!node.left) {
                node = node.right
                return node
            }
            if(!node.right) {
                node = node.left
                return node
            }
            let target = this.minNode(node.right)
            node.key = target.key
            node.right = this.removeNode(node.right, target.key)
            return node
        }

    }
}
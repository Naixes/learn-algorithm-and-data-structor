// 二叉查找树
function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

function show() {
    return this.data;
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.getSmallest = getSmallest;
    this.getMax = getMax;
    this.find = find;
    this.remove = remove;
}

function insert(data) {
    var n = new Node(data, null, null)
    if (this.root === null) {
        this.root = n
    } else {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left
                if (current == null) {
                    parent.left = n;
                    break;
                }
            } else {
                current = current.right
                if (current == null) {
                    parent.right = n
                    break
                }
            }
        }
    }
}

// 中序遍历
function inOrder(node) {
    if (!(node == null)) {
        inOrder(node.left);
        console.log(node.data)
        inOrder(node.right)
    }
}

function getSmallest(root) {
    var current = this.root || root;
    while (current.left !== null) {
        current = current.left
    }
    return current.data
}

function getMax(root) {
    var current = this.root || root;
    while (!(current.right === null)) {
        current = current.right
    }
    return current.data
}

function find(data) {
    var current = this.root;
    while (current != null) {
        if (current.data === data) {
            return current;
        } else if (data < current.data) {
            current = current.left
        } else {
            current = current.right
        }
    }
    return null
}

function remove(data) {
    removeNode(this.root, data)
}

function removeNode(node, data) {
    if (node == null) {
        return null
    }
    if (data == node.data) {
        if (node.left == null && node.right == null) {
            return null
        }
        if (node.left == null) {
            return node.right
        }
        if (node.right == null) {
            return node.left
        }
        // 把当前值和最小值进行交换
        var tempNode = getSmallest(node.right)
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data)
        return node
    } else if (data < node.data) {
        // 删除左节点
        node.left = removeNode(node.left, data);
        return node
    } else {
        // 删除右节点
        node.right = removeNode(node.right, data);
        return node
    }
}

var nums = new BST();
nums.insert(23)
nums.insert(45)
nums.insert(16)
nums.insert(37)
nums.insert(3)
nums.insert(99)
nums.insert(22)
console.log("---------")
console.log(nums)
// nums.show()
// console.log("---------")
// console.warn(nums.getSmallest())
// console.log("---------")
// console.warn(nums.getMax())
// console.log("---------")
// nums.find(16)
// nums.remove(16)
// nums.inOrder(nums.root)
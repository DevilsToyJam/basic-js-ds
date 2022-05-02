class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.head = null
    }
    root() {
        return this.head
    }

    add(data) {
        if (this.head === null) {
            this.head = new Node(data)
            return
        }
        let boshak = this.head
        while (Infinity) {
            if (data > boshak.data && boshak.right === null) {
                boshak.right = new Node(data)
                break
            }
            if (data <= boshak.data && boshak.left === null) {
                boshak.left = new Node(data)
                break
            }
            if (data > boshak.data) {
                boshak = boshak.right
                continue
            }
            if (data <= boshak.data) {
                boshak = boshak.left
                continue
            }
        }
    }

    has(data) {
        let boshak = this.head
        while (Infinity) {
            if (data === boshak.data) {
                return true
            }
            if (+boshak.data === data) return false
            if (data !== boshak.data && data > boshak.data && boshak.right === null) {
                return false
            }
            if (data !== boshak.data && data < boshak.data && boshak.left === null) {
                return false
            }
            if (data > boshak.data) {
                boshak = boshak.right
                continue
            }
            if (data < boshak.data) {
                boshak = boshak.left
                continue
            }
        }
    }

    find(data) {
        let boshak = this.head
        while (Infinity) {
            
            if (data === boshak.data) {
                return boshak
            }
            if (data !== boshak.data && data > boshak.data && boshak.right === null) {
                return null
            }
            if (data !== boshak.data && data < boshak.data && boshak.left === null) {
                return null
            }
            if (data > boshak.data) {
                boshak = boshak.right
                continue
            }
            if (data <= boshak.data) {
                boshak = boshak.left
                continue
            }
        }
    }

    remove(data) {
        let cuck = this.find(data)
        cuck.data = cuck.data.toString()
    }

    min() {
        let boshak = this.head
        while (boshak.left) {
            boshak = boshak.left
        }
        return boshak
    }

    max() {
        let boshak = this.head
        while (boshak.right) {
            boshak = boshak.right
        }
        return boshak
    }
}

const tree = new BinarySearchTree();
tree.add(9);
tree.add(14);
tree.add(2);
tree.add(6);
tree.add(128);
tree.add(8);
tree.add(31);
tree.add(54);
tree.add(1);
tree.remove(14);
tree.remove(8);
tree.remove(9);
// tree.has(14) 
// tree.has(8)
// tree.has(9)
// tree.has(2)
// tree.has(6)
// tree.has(128)
// tree.has(31)
// tree.has(54)
// tree.has(1)

tree
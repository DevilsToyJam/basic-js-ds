const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
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
    while(Infinity) {
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
    while(Infinity) {
      if (boshak === null) break
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
    while(Infinity) {
      if (boshak === null) break
      if (data === boshak.data) {
        return boshak
      }
      if (+boshak.data === data) return null
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
    while(boshak.left) {
      boshak = boshak.left
    }
    return boshak.data
  }

  max() {
    let boshak = this.head
    while(boshak.right) {
      boshak = boshak.right
    }
    return boshak.data
  }
}

module.exports = {
  BinarySearchTree
};
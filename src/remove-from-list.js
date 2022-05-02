const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function removeKFromList(l, k) {
  let cur = l
  let prev = null;
  while(Infinity) {
    if (prev === null && cur.value === k) {
      l = cur.next
      cur = l
      continue
    }
    if (cur.value === k && cur.next !== null) {
      prev.next = cur.next
      cur = prev.next
      continue
    }
    if (cur.value === k && cur.next === null) {
      prev.next = null
      break
    }
    if (cur.next === null) break
    prev = cur
    cur = cur.next
  }
  return l
}

module.exports = {
  removeKFromList
};


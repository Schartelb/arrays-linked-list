/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {

    let newNode = new Node(val);

    if (this.head === null) this.head = newNode;

    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;
    this.length += 1

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    if (this.length == 0) { this.push(val) }
    else {
      let newNode = new Node(val);
      newNode.next = this.head
      this.head = newNode
      this.length += 1
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    let last = this.tail
    let current = this.head
    while (current.next !== null) {
      if (current.next.next == null) {
        current.next = null
        this.tail = current
        this.length -= 1
        return last.val
      } else {
        current = current.next
      }
    }
    if (this.length == 1) {
      this.head = null
      this.tail = null
      this.length -= 1
      return current.val
    }
  }
  /** shift(): return & remove first item. */

  shift() {
    let first = this.head
    if (this.length == 1) {
      this.head = null
      this.tail = null
      this.length -= 1
      return first.val
    }
    this.head = first.next
    this.length -= 1
    return first.val
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let current = this.head
    let i = 0
    while (i < idx) {
      current = current.next
      i++
    }
    return current.val
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let current = this.head
    let i = 0
    while (i < idx) {
      current = current.next
      i++
    }
    current.val = val
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let current = this.head
    let newNode = new Node(val)
    if (current == null) {
      this.head = newNode
      this.tail = newNode
      this.length += 1
      return
    }
    let i = 0
    while (i < idx - 1) {
      current = current.next
      i++
    }
    this.length += 1
    newNode.next = current.next
    current.next = newNode
    if (i == idx - 1) { this.tail = newNode }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let current = this.head
    if (this.length == 1) {
      this.head = null
      this.tail = null
      this.length -= 1
      return current.val
    }
    let i = 0
    while (i < idx) {
      current = current.next
      i++
    }
    current.next = current.next.next
    this.length -= 1
    return current
  }

  /** average(): return an average of all values in the list */

  average() {
    let val = 0
    let current = this.head
    if (this.length == 0) {
      return 0
    }
    while (current !== null) {
      val += current.val
      current = current.next
    }
    return val / this.length
  }
}

module.exports = LinkedList;

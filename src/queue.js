const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.q_head = null;
    this.q_tail = null;
  }
  getUnderlyingList() {
    return this.q_head
  }
  enqueue(value) {
    const newElem = new ListNode(value);
    if (!this.q_tail || !this.q_head) {
      this.q_head = newElem
      this.q_tail = newElem
      return this
    }
    else{
      this.q_tail.next = newElem
      this.q_tail = newElem
      return this
    }
  }
  dequeue() {
    const deleted = this.q_head
    this.q_head = this.q_head.next;
    return deleted.value
  }
}

module.exports = {
  Queue,
};

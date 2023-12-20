const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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
    this.head = null;
    this.tail = null;
    this.queue = [];
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {

    const nodeList = new ListNode(value);
    if (this.head) {
      this.tail.next = nodeList;
      this.tail = nodeList;
    } else {
      this.head = nodeList;
      this.tail = nodeList;
    }
    this.queue.push(value);
  }

  dequeue() {
    this.head = this.head.next;
    return this.queue.shift();
  }
}

module.exports = {
  Queue
};

const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.item = null;
  }

  root() {
    return this.item;
  }

  add(data) {
    this.item = recursion(this.item, data);

    function recursion(node, data) {
      if (!node) {
        return new Node(data)
      }

      if (node.data == data) {
        return node;
      }

      if (data < node.data) {
        node.left = recursion(node.left, data)
      } else {
        node.right = recursion(node.right, data)
      }

      return node;
    }
  }

  has(data) {
    return search(this.item, data);

    function search(node, data) {
      if (!node) {
        return false;
      }

      if (node.data == data) {
        return true;
      }

    return data < node.data ? search(node.left, data) : search(node.right, data);
    }
  }

  find(data) {
     return recursionFind(this.item, data)

    function recursionFind(node, data) {
      if(!node) { 
        return null 
      }

      if(node.data == data) { 
        return node 
      }

      if(node.data > data) {
        return recursionFind(node.left, data)
      } else {
        return recursionFind(node.right, data)
      }
    }
  }

  remove( data) {
    this.item = recursionRemove(this.item, data);

    function recursionRemove(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = recursionRemove(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = recursionRemove(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let rightMin = node.right;
        while (rightMin.left) {
          rightMin = rightMin.left;
        }
        node.data = rightMin.data;

        node.right =recursionRemove(node.right, rightMin.data);

        return node;
      }
    }
  }

  min() {
    if (!this.item) {
      return null
    };

    let item = this.item;
    while (item.left) {
      item = item.left;
    }
    return item.data;
  }

  max() {
    if (!this.item) {
      return null
    };

    let item = this.item;
    while (item.right) {
      item = item.right;
    }
    return item.data;
  }
}

module.exports = {
  BinarySearchTree
};
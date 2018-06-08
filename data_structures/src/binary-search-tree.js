class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  depthFirstForEach(cb) {
    /* Your code here */ //Test passes
    //Recusrive Approach (same as instructor solve)
    cb(this.value);
    if (this.left) {
      this.left.depthFirstForEach(cb);
    }
    if (this.right) {
      this.right.depthFirstForEach(cb);
    }
  }

// Instructor Solve - Iterative approach
//depthFirstForEach(cb) {
//   const stack = [];
//   stack.push(this);

//    while (stack.length) {
//      const currentNode = stack.pop();
        // NOTE: if we want to achieve left to right, depth-first order, the right node needs to be pushed to the stack first

//      if (currentNode.right) {
//        stack.push(currentNode.right);  
//      }    
//      if (currentNode.left) {
//        stack.push(currentNode.left);     
//      }
//      cb(currentNode.value);
// }
//}


  breadthFirstForEach(cb) {
    /* Your code here */ //Test passing now
    let currentNodes = [this];

    while (currentNodes.length > 0) {
      let nextNode = [];
      for (let myNode of currentNodes) {
        cb(myNode.value);
        
        if (myNode.left) nextNode.push(myNode.left);
        if (myNode.right) nextNode.push(myNode.right);
      }
      currentNodes = nextNode;
    }
  }

  // Instructor solve
  // breadthFirstForEach(cb) {
  //   const q = [];
  //   q.push(this);

  //   while (q.length) {
  //     const currentNode = q.shift();

  //     if (currentNode.left) {
  //       q.push(currentNode.left);
  //     }

  //     if (currentNode.right) {
  //       q.push(currentNode.right);
  //     }

  //     cb(currentNode.value);
  //   }
  // }

  insert(value) {
    const newNode = new BinarySearchTree(value);
    if (value < this.value) {
      if (!this.left) {
        this.left = newNode;
      } else {
        this.left.insert(value);
      }
    } else if (value >= this.value) {
      if (!this.right) {
        this.right = newNode;
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(target) {
    if (this.value === target) {
      return true;
    }
    if (this.left) {
      if (this.left.contains(target)) {
        return true;
      }
    }
    if (this.right) {
      if (this.right.contains(target)) {
        return true;
      }
    }
    return false;
  }

  getMax() {
    if (!this) return null;

    let max = this.value;
    let current = this;

    while (current) {
      if (current.value > max) {
        max = current.value;
      }
      current = current.right;
    }

    return max;
  }
}

module.exports = BinarySearchTree;
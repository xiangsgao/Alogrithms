// failed to solved, well, at least not optimally
// the trick is to use a common id for both the same elements on the stack and on the heap. 
// if removed from either, add them to the removed set. 
// if item is removed, need to pop them from the associted stack and heap when doing look up and popping/dequeueing

var MaxStack = function() {
   this.stack = [];
   this.heap = new PriorityQueue((a, b) => b[0] - a[0] === 0 ? b[1] - a[1] : b[0] - a[0]);
   this.removed = new Set();
   this.cnt = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function(x) {
  this.stack.push([x, this.cnt]);
  this.heap.enqueue([x, this.cnt]);
  this.cnt += 1;
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function() {
   while(this.removed.has(this.stack.at(-1)[1])){
        this.stack.pop();
   }

   const [x, cnt] = this.stack.pop();
   this.removed.add(cnt);
   return x;
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function() {
    while(this.removed.has(this.stack.at(-1)[1])){
        this.stack.pop();
    }

    return this.stack.at(-1)[0];
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function() {
    while (this.removed.has(this.heap.front()[1])) {
        this.heap.dequeue();
    }
    return this.heap.front()[0];
}

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function() {
   while (this.removed.has(this.heap.front()[1])) {
        this.heap.dequeue();
    }
    const [x, cnt] = this.heap.dequeue();
    this.removed.add(cnt);
    return x;
};

/** 
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */
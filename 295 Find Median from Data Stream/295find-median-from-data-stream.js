
var MedianFinder = function() {
    this.minHeap = new PriorityQueue({
        compare: (a, b) => a-b
    });

    this.maxHeap = new PriorityQueue({
        compare: (a, b) => b - a
    });
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
     if (this.minHeap.isEmpty() || num > this.maxHeap.front()) {
            this.minHeap.enqueue(num);
        } else {
            this.maxHeap.enqueue(num);
        }

    // Balance the heaps to make sure their sizes differ by no more than 1
    if (this.maxHeap.size() > this.minHeap.size() + 1) {
        this.minHeap.enqueue(this.maxHeap.dequeue());
    } else if (this.minHeap.size() > this.maxHeap.size() + 1) {
        this.maxHeap.enqueue(this.minHeap.dequeue());
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if(this.maxHeap.size() > this.minHeap.size()){
        return this.maxHeap.front();
    }else if(this.minHeap.size() > this.maxHeap.size()) {
        return this.minHeap.front();
    }else{
        return (this.maxHeap.front() + this.minHeap.front()) / 2;
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
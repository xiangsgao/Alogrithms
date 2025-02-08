
var NumberContainers = function() {
    this.indexToNum = new Map();
    this.numToIndex = new Map();
};

/** 
 * @param {number} index 
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function(index, number) {
    if(this.indexToNum.has(index)){
        const oldNum = this.indexToNum.get(index);
        const oldIndex = this.numToIndex.get(oldNum);
        this.indexToNum.delete(index);
        oldIndex.set.delete(index);
        if(oldIndex.min === index){
            oldIndex.min = Math.min(Infinity, ...oldIndex.set.values());
        }
    }
    
    this.indexToNum.set(index, number);
    const cur = this.numToIndex.get(number) ?? {min: Infinity, set: new Set()};
    cur.set.add(index);
    cur.min = Math.min(cur.min, index);
    this.numToIndex.set(number, cur);
   
};

/** 
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function(number) {
    const res = this.numToIndex.get(number)?.min ?? Infinity;
    return res === Infinity ? -1 : res;
};

/** 
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */
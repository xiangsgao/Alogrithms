/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
    this.arr = [];
    const stack = [];
    
    const dfs = (arr) =>{
        const iterate = (arr.getList && arr.getList()) || arr;
        let list = [];
        for(const e of iterate){
            if(e.isInteger()){
                list.push(e.getInteger());
            }else{
                list = [...list, ...dfs(e)];
            }
        }

        return list;

        return 
    }

    this.arr = dfs(nestedList);

    // for(const e of nestedList){
    //     stack.push(e);
    // }
    
    // while(stack.length){
       
    //     const e = stack.shift();
    //     if(e.isInteger()){
    //        this.arr.push(e.getInteger());
    //     }else{
    //          for(const x of e.getList()){
    //             stack.push(x);
    //         }
    //     }
    // }
    this.index = 0;
   
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    return this.index < this.arr.length;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
   
    return this.arr[this.index++] ?? null;
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
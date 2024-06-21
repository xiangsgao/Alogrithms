class Node{
    constructor(key, val){
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}


/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.left = new Node(0, 0); // least recent
    this.right = new Node(0, 0); // most recent
    this.left.next = this.right;
    this.right.prev = this.left;
    this.remove = (node, self) =>{
        const prev = node.prev;
        const next = node.next;
        prev.next = next;
        next.prev = prev;
    }

    this.insert = (node, self) =>{
        const prev = self.right.prev;
        const next = self.right;
        prev.next = node;
        node.next = next;
        node.prev = prev;
        next.prev = node;
    }
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.cache.has(key)){
        this.remove(this.cache.get(key), this);
        this.insert(this.cache.get(key), this);
        return this.cache.get(key).val;
    }

    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.cache.has(key)){
        this.remove(this.cache.get(key), this);
    }

    const newNode = new Node(key, value);
    this.cache.set(key, newNode);
    this.insert(newNode, this);
    if(this.cache.size > this.capacity){
        const lru = this.left.next;
        this.remove(lru, this);
        this.cache.delete(lru.key)
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

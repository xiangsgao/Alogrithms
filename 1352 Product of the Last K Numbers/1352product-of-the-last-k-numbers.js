
var ProductOfNumbers = function() {
     this.products = [];
     this.product = 1;
};

/** 
 * @param {number} num
 * @return {void}
 */
 // failed to solved because i did not realize if there was a zero then any k that included 0 would return 0. besides this edge case, i could just do the division that i originally came up with. clear the arr if zero and start a new array because we could just return zero if k was out of bound because it included 0.
ProductOfNumbers.prototype.add = function(num) {
    if(num){
        this.product *= num;
        this.products.push(this.product);
    }else{
        this.products = [];
        this.product = 1;
    }
}; 

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
   if(this.products.length < k){
    return 0;
   }else if(k === this.products.length){
    return this.product;
   }else{
    
    return this.products[this.products.length - 1] /  this.products[this.products.length - 1 - k];
   }


};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
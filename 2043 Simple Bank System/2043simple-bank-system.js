/**
 * @param {number[]} balance
 */

 // pretty straight forward question, just beware of edge cases
 // can also use array instead of hashmap
var Bank = function(balance) {
    this.account = new Map();
    for(let i = 0; i < balance.length; i++){
        this.account.set(i + 1, balance[i]);
    }
};

/** 
 * @param {number} account1 
 * @param {number} account2 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.transfer = function(account1, account2, money) {
        if(!this.withdraw(account1, money)){
            return false;
        }

        const res = this.deposit(account2, money);
        if(!res){
            this.deposit(account1, money);
        }
        return res;
};

/** 
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.deposit = function(account, money) {
    if(!this.account.has(account)){
        return false;
    }
    this.account.set(account, (this.account.get(account) ?? 0) + money);
    return true;
};

/** 
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.withdraw = function(account, money) {
    if(!this.account.has(account)){
        return false;
    }
    if((this.account.get(account) ?? 0) < money){
        return false;
    }

    this.account.set(account, this.account.get(account) - money);
    return true;
};

/** 
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */
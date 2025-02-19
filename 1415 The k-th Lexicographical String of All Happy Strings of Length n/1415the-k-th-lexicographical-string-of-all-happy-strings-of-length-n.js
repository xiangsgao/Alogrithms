/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function(n, k) {
    
    const list = [];
    const chars = ["a", "b", "c"];
    const backtrack = (string = "") =>{
        if(string.length === n){
            list.push(string);
            return;
        }

        for(let i = 0; i < chars.length; i++){
            if(string[string.length - 1] === chars[i]){
                continue;
            }
            backtrack(string + chars[i]);
        }
    }

    backtrack();
    return list[k - 1] ?? "";
};
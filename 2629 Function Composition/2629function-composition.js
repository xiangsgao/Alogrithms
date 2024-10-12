/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        let cur = x;
        for(let i = functions.length - 1; i >= 0; i--){
            const fn = functions[i];
            cur = fn(cur);
        }
        return cur;   
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
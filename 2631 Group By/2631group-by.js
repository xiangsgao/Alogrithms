/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const retval = {};
    for(const e of this){
        const key = fn(e);
        const cur = retval[key] ?? [];
        cur.push(e);
        retval[key] = cur;
    }

    return retval;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
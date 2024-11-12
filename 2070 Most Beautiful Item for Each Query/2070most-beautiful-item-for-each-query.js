/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
var maximumBeauty = function(items, queries) {
    items = items.sort(([a], [b]) => a - b);
    queries = queries.map((e, i) => [e, i]).sort(([a], [b]) => a - b);
    
    const retval = queries.map(() => 0);

    let ptr = 0;
    let curMax = 0;
    for(let i = 0; i < queries.length; i++){
        const [query, index] = queries[i];
        let max = curMax;
        while(ptr < items.length && items[ptr][0] <= query){
            max = Math.max(curMax, items[ptr][1], max);
            ptr++;
        }
        ptr = Math.max(0, --ptr)
        curMax = max;
        retval[index] = max;
        if(ptr >= items.length){
            break;
        }
    }

    return retval;
};
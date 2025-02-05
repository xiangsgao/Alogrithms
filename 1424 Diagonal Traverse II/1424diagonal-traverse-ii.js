/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function(nums) {

    const map = new Map();

    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums[i].length; j++){
            if(nums[i][j] === undefined){
                continue;
            }
            const key = i + j;
            const cur = map.get(key) ?? [];
            cur.push(nums[i][j]);
            map.set(key, cur);
        }
    }

    const res = [];

    for(const dia of map.values()){
        while(dia.length){
            res.push(dia.pop());
        }
    }

    return res;

};

/*

    1 2  3
    4 *  *
    5 6  7    
    8 *  *
    9 10 11

*/
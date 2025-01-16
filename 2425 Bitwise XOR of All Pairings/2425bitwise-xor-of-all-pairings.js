/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var xorAllNums = function(nums1, nums2) {

    let res = 0;

    if(nums1.length % 2 === 1){
        for(const n of nums2){
            res = res ^ n;
        }
    }


    if(nums2.length % 2 === 1){
        for(const n of nums1){
            res = res ^ n;
        }
    }

    return res;
};
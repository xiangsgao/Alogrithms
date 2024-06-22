/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

const getMedian = () =>{
    
}

var findMedianSortedArrays = function(nums1, nums2) {
    
    const total = nums1.length + nums2.length;
    const half = Math.floor(total / 2);

    const  small = nums1.length < nums2.length ? nums1 : nums2 ;
    const large = nums1.length < nums2.length ? nums2 : nums1;
    let l = 0;
    let h = small.length - 1;

    while(true){

        const midSmall = l + Math.floor((h - l) / 2);
        const midLarge = half - midSmall - 2; // mid point of the larger array 

        const smallE = small[midSmall] ?? Number.NEGATIVE_INFINITY;
        const smallRight = small[midSmall + 1] ?? Infinity;
        const largeE = large[midLarge] ?? Number.NEGATIVE_INFINITY;
        const largeRight = large[midLarge + 1] ?? Infinity;

    
        if(largeE <= smallRight && smallE <= largeRight){
            // odd
            if(total % 2){
                return Math.min(smallRight, largeRight)
            }
            // even
            return (Math.max(smallE, largeE) + Math.min(smallRight, largeRight)) / 2;
        }else if(smallE > largeRight){
            h = midSmall - 1;
        }else{
            l = midSmall + 1;
        }

    }

 };

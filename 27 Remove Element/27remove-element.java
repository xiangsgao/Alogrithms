class Solution {
    public int removeElement(int[] nums, int val) {
        if(nums.length == 0) return nums.length;
        int pointLeft = 0;
        int pointerRight = 0;

        while(pointerRight < nums.length){
            int current = nums[pointerRight];
            if(current != val){
                nums[pointLeft] = current;
                pointLeft++;
                pointerRight++;
            } else{
                pointerRight++;
            }
        }

        return pointLeft;
    }
}
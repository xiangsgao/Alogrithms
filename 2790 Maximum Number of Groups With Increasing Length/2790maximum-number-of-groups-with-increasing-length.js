/**
 * @param {number[]} usageLimits
 * @return {number}
 */
 //cant solve because not knowing the math solution. check the comments below
 // there is also a binary search solution which is what can be expected from most people. for this one, realize that [1,2,5] means 011222, how do you group them so they fill the conditions? 2 : 12 : 012 
var maxIncreasingGroups = function(usageLimits) {
    /*
    The number of groups will always be limited by the following constraints:
    1. <= length of input
    2. The number of groups that can be formed will always require at least total frequencies of 1+2+3+...+n, where n is the number of groups. So we need sum of elements to be grether than or equal to n*(n+1)/2 to form n groups.
    */
    usageLimits.sort(function(a,b){return a-b});
    let group = 1,total=0,ans=0;
    for(let i=0;i<usageLimits.length;i++){
        total += usageLimits[i];
        let required = ((group)*(group+1))/2;
        if(total>=required){//Here we are not increamenting group more than once in any iteration so the first condition is always taken care which says groupCount <= length of the input. Hence we are just checking n*(n+1)/2
            ans = group;
            group++;
        }
    }
    return ans;
}
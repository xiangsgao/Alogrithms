/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let right = 0;
    const set = new Set();
    let answer = 0;

    while(right < s.length){
        const cRight = s[right];
        if(!set.has(cRight)){
            set.add(cRight);
            right++;
        }else{
            while(set.has(cRight)){
                answer = Math.max(set.size, answer)
                const cLeft = s[left++];
                set.delete(cLeft);
            }
        }
    }

    answer = Math.max(set.size, answer);

    return answer;
};
/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
     if (hand.length % groupSize !== 0) {
            return false;
        }
        const count = {};
        for (const num of hand) {
            count[num] = (count[num] || 0) + 1;
        }
        hand.sort((a, b) => a - b);
        for (const num of hand) {
            if (count[num] > 0) {
                for (let i = num; i < num + groupSize; i++) {
                    if (!count[i]) return false;
                    count[i] -= 1;
                }
            }
        }
        return true;
};
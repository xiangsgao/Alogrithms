/**
 * @param {string} word1
 * @param {string} word2
 * @return {number[]}
 */
// mostly failed to understand how to come up with suffix sum
// also failed to understand how to move pointers using suffix sum;
var validSequence = function(word1, word2) {
    const n1 = word1.length;
    const n2 = word2.length;
    const pref = new Array(n1).fill(0);

    // right to left, get the number of matching string so far
    let j = n2 - 1;
    for (let i = n1 - 1; i >= 0; i--) {
        if (i < n1 - 1) {
            pref[i] = pref[i + 1];
        }
        if (j >= 0 && word1[i] === word2[j]) {
            pref[i]++;
            j--;
        }
    }



    const res = [];
    let match = 0;
    let i = 0;
    j = 0;

    while(i < n1 && j < n2){
        if(word1[i] === word2[j]){ // if equal, increment both pointers
            res[j] = i;
            j++;
            match++;
        }else if (i < n1 - 1 && (pref[i + 1] + match + 1) >= n2) { // if not equal and prefix matches equal to remaining, we can get the rest of the characters and return
            res[j] = i;
            j++;
            i++;
            while (j < n2 && i < n1) {
                if (word1[i] === word2[j]) {
                    res[j] = i;
                    j++;
                }
                i++;
            }
            return res;
        }

        i++;
    }

    if (match === n2) {
        return res;
    }

    return [];

};
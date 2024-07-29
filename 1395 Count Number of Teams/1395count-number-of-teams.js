/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    let res = 0;
    for(let i = 1; i < rating.length - 1; i++){
        let smaller = 0;
        let larger = 0;

        for(let j = 0; j < i; j++){
            if(rating[j] < rating[i]){
                smaller += 1;
            }
        }
        for(let j = i + 1; j < rating.length; j++){
            if(rating[j] > rating[i]){
                larger += 1;
            }
        }
        res += smaller * larger;

        const left = i - smaller;
        const right = rating.length - i - 1 - larger;

        res += left * right;
    }
    return res;

};
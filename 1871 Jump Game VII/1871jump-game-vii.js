/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
// cant solve because i dont understand how to bfs this 
// idea is to keep track of the furthest jump so far so you do not rejump from a position already visited
var canReach = function(s, minJump, maxJump) {
       const q = [0];
    let farthest = 0;

    while(q.length){
        const i = q.pop();

        const start = Math.max(farthest + 1, i + minJump);

        for(let j = start; j < Math.min(s.length, i + maxJump + 1); j++){
            if(s[j] === "0"){
                q.unshift(j);
                if(j === s.length - 1){
                    return true;
                }
            }
        }

        fathest = i + maxJump;
    }

    return false
};
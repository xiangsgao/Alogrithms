
var Leaderboard = function() {
    
     this.scores = new Map();

}

/** 
 * @param {number} playerId 
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function(playerId, score) {
    if(!this.scores.has(playerId)){
            this.scores.set(playerId, 0);
        }

        this.scores.set(playerId, this.scores.get(playerId) + score);
};

/** 
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function(k) {
        const list = [...this.scores.values()].sort((a, b) => b - a);

        let res = 0;
        for(let i = 0; i < k && i < list.length; i++){
            res += list[i];
        }

        return res;
};

/** 
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function(playerId) {
    
     this.scores.set(playerId, 0);

};

/** 
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */

var DetectSquares = function() {
   this.ptsCount = new Map();
};

/** 
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function([x,y]) {
        if (!this.ptsCount.has(x)) this.ptsCount.set(x, new Map());
        const yCount = this.ptsCount.get(x);
        yCount.set(y, (yCount.get(y) || 0) + 1);
};

/** 
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function([x1, y1]) {
        let res = 0;
        if (!this.ptsCount.has(x1)) return res;

        const x1Points = this.ptsCount.get(x1);
        for (const [y2, cnt] of x1Points) {
            const side = y2 - y1;
            if (side === 0) continue;

            const x3 = x1 + side;
            const x4 = x1 - side;

            res += cnt *
                   (this.ptsCount.get(x3)?.get(y1) || 0) *
                   (this.ptsCount.get(x3)?.get(y2) || 0);

            res += cnt *
                   (this.ptsCount.get(x4)?.get(y1) || 0) *
                   (this.ptsCount.get(x4)?.get(y2) || 0);
        }

        return res;
};

/** 
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */
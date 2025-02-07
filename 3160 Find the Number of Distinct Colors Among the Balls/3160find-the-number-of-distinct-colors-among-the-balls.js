/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
 // note to self, need to beware of minor bugs
var queryResults = function(limit, queries) {

    const ballToColors = new Map(); // ball to color
    const colorToBalls = new Map(); // color to ball
    const res = [];
    let colors = 0;
    for(const [ball, color] of queries){
        // remove ball from previous color
        const prevColor = ballToColors.get(ball);
        if(prevColor !== undefined && colorToBalls.has(prevColor)){
            const prevBalls = colorToBalls.get(prevColor);
            prevBalls.delete(ball);
            if(prevBalls.size === 0){
                colorToBalls.delete(prevColor);
                colors -= 1;
            }
        }


        // add to current balls
        const balls = colorToBalls.get(color) ?? new Set();
        if(balls.size === 0){
            colors += 1;
        }
        balls.add(ball);
        colorToBalls.set(color, balls);


        

        ballToColors.set(ball, color);
        res.push(colorToBalls.size);
    }

    return res;


};
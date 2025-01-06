/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    const fromLeft = Array(boxes.length).fill(0);

    const fromRight = Array(boxes.length).fill(0);


    let balls = 0;
    let moves = 0;
    for(let i = 0; i < boxes.length; i++){
        const newMoves = moves + balls;
        fromLeft[i] = newMoves;
        moves = newMoves;
        balls = balls + Number(boxes[i]);
    }

    balls = 0;
    moves = 0;
    for(let i = boxes.length - 1; i >= 0; i--){
        const newMoves = moves + balls;
        fromRight[i] = newMoves;
        moves = newMoves;
        balls = balls + Number(boxes[i]);
    }

    return Array(boxes.length).fill().map((_, i) => {
        return fromLeft[i] + fromRight[i];
    });
};
class SnakeGame {
    constructor(width, height, food){
        this.body = [[0, 0]];
        this.width = width;
        this.height = height;
        this.food = food.map(([x, y]) => this.getKey(x, y));
        this.score = 0;
    }

    getKey(x, y){
        return `${x},${y}`;
    }


    move(dir){
        
        // move head
        const newPos = this.getMoveCord(this.body.at(-1), dir);
        if(!newPos){
            return -1;
        }

        // update pos
        this.body.push(newPos);
        const lastTail = this.body.shift();

        // check if there is food here
        const headKey = this.getKey(newPos[0], newPos[1]);
        if(this.food[0] === headKey){
            this.food.shift(headKey);
            this.body.unshift(lastTail);
            this.score+=1;
        }

        return this.score;
    }




    getMoveCord(headPos, dir){
        let [x, y] = headPos;
        switch(dir){
            case "U":{
                x -= 1;
                break;
            }
            case "L":{
                y-=1;
                break;
            }
            case "R":{
                y+=1;
                break;
            }
            case "D":{
                x+=1;
                break;
            }
        }

        if(x >= this.height || x < 0 || y >= this.width || y < 0){
            return null;
        }

        const ranIntoBody = this.body.some(([a, b], i) =>{
            return (i !== 0) && a === x && b === y; 
        })


        if(ranIntoBody){
            return null;
        }

        return [x, y];
    }


}
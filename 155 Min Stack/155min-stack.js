

class MinStack {
    constructor(){
        this.stack = [];
        this.stack2 = [];
    }

    getMin(){
        return this.stack2[this.stack2.length - 1];
    }

    pop(){
        const retval = this.stack2.pop();
        this.stack.pop();
        return retval;
    }

    push(val){
        this.stack.push(val);
        const curMin = this.stack2[this.stack2.length - 1];
        if(curMin !== undefined){
            this.stack2.push(Math.min(val, curMin));
        }else{
            this.stack2.push(val);
        }
       
    }

    top(){
        return this.stack[this.stack.length - 1];
    }
}
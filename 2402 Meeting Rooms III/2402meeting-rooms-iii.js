/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
 // couldnt solve because i used pq to pick meetings rather than the rooms
var mostBooked = function(n, meetings) {
    const unused = new PriorityQueue((a, b) => a - b);
    const used = new PriorityQueue(([a, aR], [b, bR]) =>{
         if(a === b){
            return aR - bR;
         }

         return a - b;
    });

    for(let i = 0; i < n; i++){
        unused.enqueue(i);
    }

    const count = Array(n).fill(0);
    meetings = meetings.sort(([a], [b]) => a - b);

    for(const [start, end] of meetings){
        
        // make the used rooms available
        while(!used.isEmpty() && used.front()[0] <= start){
            const [_, room] = used.dequeue();
            unused.enqueue(room);
        }
        
        let choosenRoom = -1;
        if(!unused.isEmpty()){
            // picked the choosen room among the unused
            const room = unused.dequeue();
            used.enqueue([end,room]);
            choosenRoom = room;
        }else{
            // if no unused, pick the used room with the earliest ending time
            const [earliest, room] = used.dequeue();
            used.enqueue(
                [earliest + end - start, room] // end - start stands for the length of the meeting, need to delay it by this amount
            );
            choosenRoom = room;
        }
        count[choosenRoom] += 1;
    }

    return count.reduce((acc, e, i) =>{
        const [curMax, curIdx] = acc;
        if(curMax < e){
            return [e, i];
        }

        return acc;
    }, [-Infinity, -1])[1];
    
};
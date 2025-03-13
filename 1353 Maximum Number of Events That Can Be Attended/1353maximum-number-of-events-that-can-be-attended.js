/**
 * @param {number[][]} events
 * @return {number}
 */
 // coundt solve because very tricky to code up. 
 // logic is basically sort the events by start day. ask which events to attend today. pick which event we can attend today that ends the soonest. 
 // to do this, need to loop throuhg the events and keep a heap to keep track of which end the sonnest among the events we can attend today
var maxEvents = function(events) {
    events = events.sort((a, b) => a[0] - b[0]);



    const pq = new PriorityQueue((a, b) => {
        return a - b;
    });

   let i = 0;
   let res = 0;
   let d = 0;
   const n = events.length;
   while(!pq.isEmpty() || i < n){
    
    if(pq.isEmpty()){
        d = events[i][0]; // if queue is empty, set today to the current i event start day which is ordered by starting day
    }

    while(i < n && events[i][0] <= d){
        pq.enqueue(events[i++][1]); // add all the ending days of the events starting today or earlier to the heap, increment the i
    }
    
    ///////////////////////////////// pick todays event to attend
    pq.dequeue(); // pick the event that end the soonest
    ++res; // add the result
    ++d; // increment the current day since today is picked for the above event
    /////////////////////////////////

    while(!pq.isEmpty() && pq.front() < d){ // all the events that end today need to pop from the heap as well
        pq.dequeue();
    }
   }

   return res;
};
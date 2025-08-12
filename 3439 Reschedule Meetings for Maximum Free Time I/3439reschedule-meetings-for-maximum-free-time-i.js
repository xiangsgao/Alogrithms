/**
 * @param {number} eventTime
 * @param {number} k
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */
 // cant solve because failed to realize moving k means combining k + 1 free spaces
 // use prefix sum to find the max ajacent k + 1 free spaces sum
var maxFreeTime = function(eventTime, k, startTime, endTime) {
   const freeSpace = [startTime[0]];

   for(let i = 1; i < startTime.length; i++){
    freeSpace.push(startTime[i] - endTime[i - 1]);
   }

    // if there are any free spaces at the very end
   if(endTime.at(-1) !== eventTime){
        freeSpace.push(eventTime - endTime.at(-1));
   }

   const prefix = [0];

   for(let i = 0; i < freeSpace.length; i++){
    prefix.push(prefix.at(-1) + freeSpace[i]);
   }

   let max = 0;
   // this is just a slide of a fix window of size k + 1
   for(let i = k; i < prefix.length; i++){
    max = Math.max(max, prefix[i] - prefix[Math.max(i - k - 1, 0)]);
   }

    // handle edge cases. if we have just one space and all connecting events
    // this means we cant move any events to combine blocks
   return Math.max(max, Math.max(...freeSpace));

};
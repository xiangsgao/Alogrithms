/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function(m, n, head) {
    const matrix = Array(m).fill().map(() => Array(n).fill(-1));
    let leftStart = 0;
    let rightBound = n;
    let topStart = 0;
    let bottomBound = m;

    while(true){
        // iterate the current outer shell

        // fill top
        for(let i = leftStart; i < rightBound; i++){
            if(!head){
                break;
            }
            matrix[topStart][i] = head.val;
            head = head.next;
        } 


        topStart += 1;
        
        if(!head){
            break;
        }
 
        // fill right;
        for(let i = topStart; i < bottomBound; i++){
            if(!head){
                break;
            }
            
           
            matrix[i][rightBound - 1] = head.val;
            head = head.next;
        }

      
        rightBound -= 1;
        if(!head){
            break;
        }

        // fill bottom
 
        for(let i = rightBound - 1; i >= leftStart; i--){
            if(!head){
                break;
            } 
            matrix[bottomBound - 1][i] = head.val;
            head = head.next;
        }
        
        bottomBound -= 1;
 
        if(!head){
            break;
        }

        // fill left 
        for(let i = bottomBound - 1; i >= topStart; i--){
            if(!head){
                break;
            }
            matrix[i][leftStart] = head.val;
            head = head.next;
        }
        leftStart += 1;

        if(!head){
            break;
        }

    }
    return matrix;
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} op1
 * @param {number} op2
 * @return {number}
 */
 // cant solve because need to use tabulation and use 3d dp

const minArraySum = function (nums, k, op1, op2) {
    const createMatrix = (op1, op2) => Array.from({ length: op1 + 1 },
        () => Array(op2 + 1).fill(Infinity));

    let prevDP = createMatrix(op1, op2); // Previous DP
    let currDP = createMatrix(op1, op2); // Current DP

    prevDP[0][0] = 0; // Base case: No operations performed

    for (const x of nums) {
        for (let y = 0; y <= op1; y++) {
            for (let z = 0; z <= op2; z++) {
                // Case 1: Skip both operations
                let a0 = prevDP[y][z] + x;
                // Case 2: Apply operation 1
                let a1 = y > 0 ? prevDP[y - 1][z] + Math.ceil(x / 2) : Infinity;
                // Case 3: Apply operation 2
                let a2 = z > 0 && x >= k ? prevDP[y][z - 1] + x - k : Infinity;
                // Case 4: Apply both (operation 1 → operation 2)
                let a3 = y > 0 && z > 0 && Math.ceil(x / 2) >= k
                    ? prevDP[y - 1][z - 1] + Math.ceil(x / 2) - k
                    : Infinity;
                // Case 5: Apply both (operation 2 → operation 1)
                let a4 = y > 0 && z > 0 && x >= k
                    ? prevDP[y - 1][z - 1] + Math.ceil((x - k) / 2)
                    : Infinity;

                // Take the minimum of all possibilities
                currDP[y][z] = Math.min(a0, a1, a2, a3, a4);
            }
        }

        // Swap current and previous DP
        prevDP = currDP;
        currDP = createMatrix(op1, op2); // Reset current DP
    }

    // Result is the minimum value in the last row of the final DP
    return Math.min(...prevDP.at(-1));
};
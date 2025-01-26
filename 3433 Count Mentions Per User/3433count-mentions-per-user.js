/**
 * @param {number} numberOfUsers
 * @param {string[][]} events
 * @return {number[]}
 */
var countMentions = function(numberOfUsers, events) {
   // Sort events by timestamp. If timestamps are equal, prioritize "OFFLINE" events.
    events = events.sort((a, b) => {
        const num1 = parseInt(a[1]), num2 = parseInt(b[1]);
        if (num1 == num2) {
            if (a[0] == "OFFLINE") {
                return -1;
            } else {
                return 1;
            }
        } else {
            return num1 - num2;
        }
    });

    const mentions = Array(numberOfUsers).fill(0); // Tracks mention count for each user.
    const offlineUsers = Array(numberOfUsers).fill(-1); // Tracks offline timestamps for each user (-1 means online).

    for (const [message, timestamp, messageString] of events) {
        // Check if any user has been offline for 60+ seconds; mark them as online if so.
        for (let i = 0; i < numberOfUsers; i++) {
            if (offlineUsers[i] != -1 && timestamp - offlineUsers[i] >= 60) {
                offlineUsers[i] = -1; // Reset user to available.
            }
        }

        if (message == "OFFLINE") {
            // Mark the user as offline with the current timestamp.
            offlineUsers[messageString] = parseInt(timestamp);
            continue;
        } else {
            // Handle mentions based on the message type.
            switch (messageString) {
                case "ALL": {
                    // Increment mentions for all users.
                    for (let i = 0; i < numberOfUsers; i++) {
                        mentions[i]++;
                    }
                    break;
                }
                case "HERE": {
                    // Increment mentions only for online users.
                    for (let i = 0; i < numberOfUsers; i++) {
                        if (offlineUsers[i] == -1) {
                            mentions[i]++;
                        }
                    }
                    break;
                }
                default: {
                    // Parse specific mentions (e.g., "id1 id2") and increment counts for mentioned users.
                    const mentionedUsers = messageString.replace(/id/mg, '').split(' ');
                    for (const user of mentionedUsers) {
                        mentions[user]++;
                    }
                    break;
                }
            }
        }
    }
    return mentions;

};
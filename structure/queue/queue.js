// https://github.com/mykola-telychko/js-array-queue/blob/main/index.js

let arr = [1, 2, 3];
const limit = arr.length; // Fixed queue length limit

/**
 * Adds a number to  fixed length(limit) array
 * @param {number} newNum - The number to add to the queue
 */
function addToQueue(newNum) {
  // Check if the number already exists in the array
  if (!arr.includes(newNum)) {
    // Shift all elements to the right by one position
    for (let i = arr.length - 1; i > 0; i--) {
      arr[i] = arr[i - 1];
    }
    
    // Add the new unique number at the beginning
    arr[0] = newNum;
  }
  
  // Ensure array doesn't exceed the limit
  if (arr.length > limit) {
    arr.pop();
  }
}

// Test cases
addToQueue(4);
console.log(arr); // [4, 1, 2] (3 gets removed to maintain length)

addToQueue(2); // Already exists - no change
console.log(arr); // [4, 1, 2] (unchanged)

addToQueue(5);
console.log(arr); // [5, 4, 1] (2 gets removed)

addToQueue(3);
console.log(arr); // [3, 5, 4] (1 gets removed)

addToQueue(3); // Already exists - no change
console.log(arr); // [3, 5, 4] (unchanged)
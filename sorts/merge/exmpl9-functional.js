const numbers = [23, 15, 42, 4, 8, 16, 3, 9, 27, 10, 33, 6, 13, 1, 25];
const str = ["G", "F", "C", "A", "B", "E", "D"];

// Merge two sorted arrays into one sorted array
const merge = (left, right) => {
  // Create a result array to accumulate the merged values
  return left.length && right.length
    ? left[0] < right[0] // Compare the first elements of both arrays
      ? [left[0], ...merge(left.slice(1), right)] // If left[0] is smaller, include it in the result
      : [right[0], ...merge(left, right.slice(1))] // Otherwise, include right[0] in the result
    : left.length // If right is empty, return the remaining elements in left
    ? left
    : right; // If left is empty, return the remaining elements in right
};

// Merge sort function
const mergeSort = arr => {
  // Base case: if array has one or no elements, it's already sorted
  return arr.length <= 1
    ? arr
    : (() => {
        // Split the array into two halves
        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);

        // Recursively sort both halves and merge them
        return merge(mergeSort(left), mergeSort(right));
      })();
};

console.log(mergeSort(numbers)); 
console.log(mergeSort(str));     
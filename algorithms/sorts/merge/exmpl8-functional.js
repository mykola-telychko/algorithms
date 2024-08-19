var numbers = [23, 15, 42, 4, 8, 16, 3, 9, 27, 10, 33, 6, 13, 1, 25];
var str = ["G", "F", "C", "A", "B", "E", "D"];

function mergeSort(arr) {
  // Base case: If the array has 1 or fewer elements, it's already sorted.
  if (arr.length <= 1) return arr;

  // Split the array into two halves.
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Recursively sort both halves and then merge the sorted halves.
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  // Merge two sorted arrays into one sorted array.
  return [
    // Check if both arrays have elements left.
    ...(left.length && right.length 
      // Compare the first elements of left and right and add the smaller one to the merged array.
      ? left[0] < right[0] 
        ? [left[0], ...merge(left.slice(1), right)] // Add the first element of left.
        : [right[0], ...merge(left, right.slice(1))] // Add the first element of right.
      : left.length 
      ? left // If only left has elements, add them to the merged array.
      : right // If only right has elements, add them to the merged array.
    )
  ];
}

console.log(mergeSort(numbers));
console.log(mergeSort(str));    

// https://rosettacode.org/wiki/Sorting_algorithms/Counting_sort
var numbers = [23, 15, 42, 4, 8, 16, 6, 13, 1, 25];
var str = ["G", "F", "C", "A", "B", "E", "D"];

var countSort = function(arr) {
    if (arr.length === 0) return;

    // Detect if array contains numbers or strings
    let isStringArray = typeof arr[0] === 'string';

    // If it's a string array, convert it to ASCII values for sorting
    let mappedArr = isStringArray ? arr.map(char => char.charCodeAt(0)) : arr;

    // Find min and max in the array automatically
    let min = Math.min(...mappedArr);
    let max = Math.max(...mappedArr);
    
    let i, z = 0, count = [];
    
    // Initialize count array
    for (i = min; i <= max; i++) {
        count[i] = 0;
    }
    
    // Count each element in the array
    for (i = 0; i < mappedArr.length; i++) {
        count[mappedArr[i]]++;
    }
    
    // Rebuild sorted array in ascending order
    for (i = min; i <= max; i++) {
        while (count[i]-- > 0) {
            if (isStringArray) {
                arr[z++] = String.fromCharCode(i); // Convert back to characters for strings
            } else {
                arr[z++] = i; // Keep as numbers
            }
        }
    }
};
var numbers = [23, 15, 42, 4, 8, 16, 6, 13, 1, 25];
countSort(numbers);  // Sorting in ascending order
console.log(numbers);  // Output: [1, 4, 6, 8, 13, 15, 16, 23, 25, 42]

var str = ["G", "F", "C", "A", "B", "E", "D"];
countSort(str);  // Sorting in ascending order
console.log(str);  // Output: ['A', 'B', 'C', 'D', 'E', 'F', 'G']

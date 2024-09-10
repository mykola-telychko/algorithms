const countSort = (arr) => {
    if (arr.length === 0) return [];

    // Check if array contains strings or numbers
    const isStringArray = typeof arr[0] === 'string';

    // Convert strings to ASCII codes, otherwise keep numbers as is
    const mappedArr = isStringArray ? arr.map(char => char.charCodeAt(0)) : arr;

    // Find min and max values in the array
    const min = Math.min(...mappedArr);
    const max = Math.max(...mappedArr);

    // Create count array
    const count = mappedArr.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, new Array(max - min + 1).fill(0));

    // Generate sorted array
    const sorted = count.reduce((acc, val, index) => {
        const value = index + min;  // Actual value corresponding to the index
        return acc.concat(Array(val).fill(value));  // Append the value based on its count
    }, []);

    // Convert ASCII codes back to characters if input was string array
    return isStringArray ? sorted.map(code => String.fromCharCode(code)) : sorted;
};

const numbers = [23, 15, 42, 4, 8, 16, 6, 13, 1, 25];
console.log(countSort(numbers));  
// Output: [1, 4, 6, 8, 13, 15, 16, 23, 25, 42]

const str = ["G", "F", "C", "A", "B", "E", "D"];
console.log(countSort(str));  
// Output: ['A', 'B', 'C', 'D', 'E', 'F', 'G']

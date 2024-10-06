const insertionSort = (arr) => {
    // Recursive function to insert an element into the correct position
    const insert = (sortedArr, element) => {
        if (sortedArr.length === 0 || element >= sortedArr[sortedArr.length - 1]) {
            return [...sortedArr, element]; // Append if it's larger than the last element
        } else {
            return [...sortedArr.slice(0, sortedArr.length - 1), element, sortedArr[sortedArr.length - 1]];
        }
    };

    // Recursive function to process the unsorted array
    const sort = (unsortedArr, sortedArr = []) => {
        if (unsortedArr.length === 0) {
            return sortedArr; // Base case: return the fully sorted array
        } else {
            const [head, ...tail] = unsortedArr; // Take the first element (head) and the rest (tail)
            return sort(tail, insert(sortedArr, head)); // Insert head into sortedArr and recurse on the tail
        }
    };

    return sort(arr);
};

// Example usage
const numArr = [10, 3, 11, 15, 19, 1];
const strArr = ['C', 'W', 'P', 'E', 'R', 'G'];

console.log(insertionSort(numArr)); 
console.log(insertionSort(strArr)); 

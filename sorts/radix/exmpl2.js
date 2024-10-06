function getCharCodeAt(str, index) {
    // Get ASCII value of character at index, return -1 if out of bounds
    return index < str.length ? str.charCodeAt(index) : -1;
}

function radixSortStrings(arr) {
    if (arr.length === 0) return arr;

    // Find the longest string length
    let maxLength = Math.max(...arr.map(str => str.length));

    for (let k = maxLength - 1; k >= 0; k--) {
        // Create an array of 256 empty arrays (buckets for each ASCII value)
        let charBuckets = Array.from({ length: 257 }, () => []);
        
        for (let i = 0; i < arr.length; i++) {
            let charCode = getCharCodeAt(arr[i], k) + 1; // Shift to handle -1
            charBuckets[charCode].push(arr[i]);
        }
        
        // Flatten the buckets back into the array
        arr = [].concat(...charBuckets);
    }

    return arr;
}

// Example usage
var strArr = ["G", "F", "C", "A", "B", "E", "D"];
console.log("Sorted Array:", radixSortStrings(strArr));

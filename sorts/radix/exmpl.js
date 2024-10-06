// https://rosettacode.org/wiki/Sorting_algorithms/Radix_sort

// Helper function to get the digit at the given place value
function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// Helper function to count the number of digits in a number
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Helper function to find the maximum number of digits in the array
function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function radixSort(nums) {
    const maxDigitCount = mostDigits(nums);
    
    for (let k = 0; k < maxDigitCount; k++) {
        // Create an array of 10 empty arrays (buckets for each digit)
        let digitBuckets = Array.from({ length: 10 }, () => []);
        
        // Place numbers into the corresponding bucket based on their kth digit
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        
        // Flatten the buckets back into the original array
        nums = [].concat(...digitBuckets);
    }
    
    return nums;
}

// Example usage
let arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log("Sorted Array:", radixSort(arr));

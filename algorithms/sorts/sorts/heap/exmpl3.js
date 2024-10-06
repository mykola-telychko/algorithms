var numbers = [23, 15, 42, 4, 8, 16, 6, 13, 1, 25];
var strArr = ["G", "F", "C", "A", "B", "E", "D"];

function heapSort(arr) {
    let end = arr.length - 1;

    // Step 1: Build the max heap
    for (let start = Math.floor(arr.length / 2) - 1; start >= 0; start--) {
        siftDown(arr, start, end);
    }

    // Step 2: Extract elements from the heap one by one
    while (end > 0) {
        [arr[end], arr[0]] = [arr[0], arr[end]]; // Swap the root(max) with the last element
        end--; // Reduce the size of the heap
        siftDown(arr, 0, end); // Restore the heap property after the swap
    }
}

// Helper function to maintain the max-heap property
function siftDown(arr, startPos, endPos) {
    let rootPos = startPos;

    while (rootPos * 2 + 1 <= endPos) { // While the root has at least one child
        let childPos = rootPos * 2 + 1; // Left child position
        if (childPos + 1 <= endPos && arr[childPos] < arr[childPos + 1]) {
            childPos++; // Use the right child if it's larger
        }
        if (arr[rootPos] < arr[childPos]) {
            [arr[rootPos], arr[childPos]] = [arr[childPos], arr[rootPos]]; // Swap root with the larger child
            rootPos = childPos; // Move down to the child position
        } else {
            return;
        }
    }
}

heapSort(numbers);
heapSort(strArr);
console.log(numbers);
console.log(strArr); 

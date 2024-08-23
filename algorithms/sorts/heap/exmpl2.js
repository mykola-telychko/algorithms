var numbers = [23, 15, 42, 4, 8, 16, 6, 13, 1, 25];
var strArr = ["G", "F", "C", "A", "B", "E", "D"];

function heapSort(arr) {
    // Helper function to maintain the max-heap property
    function siftDown(startPos, endPos) {
        let rootPos = startPos;

        while (rootPos * 2 + 1 <= endPos) { // While the root has at least one child
            let childPos = rootPos * 2 + 1; // Left child position
            if (childPos + 1 <= endPos && arr[childPos] < arr[childPos + 1]) {
                childPos++; // Use the right child instead if it's larger
            }
            if (arr[rootPos] < arr[childPos]) {
                [arr[rootPos], arr[childPos]] = [arr[childPos], arr[rootPos]]; // Swap root with the larger child
                rootPos = childPos; // Move down to the child position
            } else {
                return;
            }
        }
    }

    // Convert array to a max heap
    function heapify() {
        let start = Math.floor(arr.length / 2) - 1; // Start from the last parent node

        while (start >= 0) {
            siftDown(start, arr.length - 1);
            start--;
        }
    }

    // Start of the heapSort process
    heapify(); // Step 1: Build the heap

    let end = arr.length - 1;
    while (end > 0) {
        [arr[end], arr[0]] = [arr[0], arr[end]]; // Step 2: Swap the root(max) with the end element
        end--; // Reduce the heap size by one
        siftDown(0, end); // Step 3: Restore heap property after swap
    }
}

heapSort(numbers);
heapSort(strArr);
console.log(numbers); 
console.log(strArr);
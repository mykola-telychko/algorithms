var numbers = [23, 15, 42, 4, 8, 16, 6, 13, 1, 25];

function heapSort(arr) {
    // Step 1: Build the max heap
    heapify(arr); // Convert the array into a max heap structure

    let end = arr.length - 1; // Start with the last element in the array

    // Step 2: Repeatedly extract the max element and reduce the heap size
    while (end > 0) {
        // Swap the end element with the root (the maximum element)
        [arr[end], arr[0]] = [arr[0], arr[end]];
        end--; // Decrease the size of the heap
        // Restore the heap property for the reduced heap
        siftDown(arr, 0, end);
    }
}

function heapify(arr) {
    // Start from the last parent node and move upwards
    let start = Math.floor(arr.length / 2) - 1;

    // Move from the last parent node to the root, restoring the heap property
    while (start >= 0) {
        // Ensure max-heap property for each subtree
        siftDown(arr, start, arr.length - 1);
        start--; // Move to the previous parent node
    }
}

function siftDown(arr, startPos, endPos) {

    let rootPos = startPos; // Start with the root of the subtree

    // While the root has at least one child
    while (rootPos * 2 + 1 <= endPos) {
        let childPos = rootPos * 2 + 1; // Position of the left child
        // If there is a right child and it is greater than the left child
        if (childPos + 1 <= endPos && arr[childPos] < arr[childPos + 1]) {
            childPos++; // Use the right child instead if it's larger
        }
        // If the root is smaller than the largest child
        if (arr[rootPos] < arr[childPos]) {
            // Swap the root with the larger child
            [arr[rootPos], arr[childPos]] = [arr[childPos], arr[rootPos]];
            rootPos = childPos; // Move down to the child position
        } else {
            // If the heap property is satisfied, exit
            return;
        }
    }
}

heapSort(numbers);
console.log(numbers);

// Detailed Explanation:
// heapSort(arr):
//
// Purpose: To sort the entire array using the heap sort algorithm.
// Step-by-Step:
//      Heapify the array: Convert the array into a max heap where the largest
//      element is at the root (index 0).
//  Sorting phase:
//      Repeatedly swap the root (maximum value) with the last unsorted element.
//      Reduce the heap size by one and restore the heap property using siftDown.
// Loop (while (end > 0)):
//      Continues until the heap size is reduced to zero.
//      Ensures that after each iteration, the largest unsorted element
//      is moved to its correct position.
//      heapify(arr):
//
// Purpose: To transform the array into a max heap.
// Step-by-Step:
//    Start from the last parent node (Math.floor(arr.length / 2) - 1) because
// nodes after this index are leaf nodes and don't have children.
// For each parent node, call siftDown to ensure
// the subtree rooted at this node satisfies the heap property.
//    Loop (while (start >= 0)):
// Iterates backward from the last parent node to the root, ensuring the heap
// property is established for the entire tree.
//    siftDown(arr, startPos, endPos):
//
// Purpose: To maintain the max-heap property for the subtree rooted at startPos.
// Step-by-Step:
//      Starts at the startPos (initially the root of the subtree).
// Compares the node with its children to find the largest among them.
// If the node is smaller than the largest child, they are swapped, and the process
// continues with the new child position.
// Stops when the node is larger than both children or when it reaches a leaf.
// Loop (while (rootPos * 2 + 1 <= endPos)):
// Continues as long as the current node (rootPos) has at least one child.
// Ensures that the largest element is always "sifted down" to maintain the max-heap property.
// By following these steps, heap sort efficiently sorts the array in-place,
// achieving O(n log n) time complexity.

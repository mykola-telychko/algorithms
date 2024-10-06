const numbers = [23, 15, 42, 4, 8, 16, 6, 13, 1, 25];
const strArr = ["G", "F", "C", "A", "B", "E", "D"];

function heapSort(arr) {
    // Step 1: Convert the array into a max heap
    for (let start = Math.floor(arr.length / 2) - 1; start >= 0; start--) {
        let rootPos = start;

        while (rootPos * 2 + 1 < arr.length) { // While the root has at least one child
            let childPos = rootPos * 2 + 1; // Left child position

            if (childPos + 1 < arr.length && arr[childPos] < arr[childPos + 1]) {
                childPos++; // Use the right child instead if it's larger
            }

            if (arr[rootPos] < arr[childPos]) {
                [arr[rootPos], arr[childPos]] = [arr[childPos], arr[rootPos]]; // Swap root with the larger child
                rootPos = childPos; // Move down to the child position
            } else {
                break;
            }
        }
    }

    // Step 2: Perform the heap sort by extracting the max element
    for (let end = arr.length - 1; end > 0; end--) {
        [arr[0], arr[end]] = [arr[end], arr[0]]; // Swap the root(max) with the end element
        let rootPos = 0;

        while (rootPos * 2 + 1 < end) { // While the root has at least one child
            let childPos = rootPos * 2 + 1; // Left child position

            if (childPos + 1 < end && arr[childPos] < arr[childPos + 1]) {
                childPos++; // Use the right child if it's larger
            }

            if (arr[rootPos] < arr[childPos]) {
                [arr[rootPos], arr[childPos]] = [arr[childPos], arr[rootPos]]; // Swap root with the larger child
                rootPos = childPos; // Move down to the child position
            } else {
                break;
            }
        }
    }

    return arr; // Return the sorted array
}

console.log(heapSort(numbers)); 
console.log(heapSort(strArr)); 

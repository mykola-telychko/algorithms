const numbers = [23, 15, 42, 4, 8, 16, 6, 13, 1, 25];
const strArr = ["G", "F", "C", "A", "B", "E", "D"];

function heapSort(arr) {
    // Helper function to create a max heap
    const heapify = (arr) => {
        const newArr = [...arr]; // Create a new copy of the array to maintain immutability
        const start = Math.floor(newArr.length / 2) - 1;

        const newHeap = Array.from({ length: start + 1 }, (_, i) => start - i).reduce(
            (heap, index) => siftDown(heap, index, heap.length - 1),
            newArr
        );

        return newHeap;
    };

    // Helper function to maintain the max-heap property
    const siftDown = (arr, startPos, endPos) => {
        let rootPos = startPos;
        const newArr = [...arr]; // Create a new copy of the array

        while (rootPos * 2 + 1 <= endPos) {
            let childPos = rootPos * 2 + 1;

            if (childPos + 1 <= endPos && newArr[childPos] < newArr[childPos + 1]) {
                childPos++;
            }

            if (newArr[rootPos] < newArr[childPos]) {
                [newArr[rootPos], newArr[childPos]] = [newArr[childPos], newArr[rootPos]];
                rootPos = childPos;
            } else {
                break;
            }
        }

        return newArr;
    };

    // Main function logic
    const sort = (arr) => {
        let heap = heapify(arr);
        const end = arr.length - 1;

        return Array.from({ length: end }, (_, i) => end - i).reduce((sortedArr, i) => {
            const newArr = [...sortedArr]; // Create a new copy of the array
            [newArr[0], newArr[i]] = [newArr[i], newArr[0]]; // Swap the root (max) with the end element
            return siftDown(newArr, 0, i - 1); // Restore the heap property
        }, heap);
    };
    return sort(arr);
}

const sortedNumbers = heapSort(numbers);
const sortedStrArr = heapSort(strArr);

console.log(sortedNumbers); 
console.log(sortedStrArr);
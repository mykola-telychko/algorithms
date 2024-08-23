let numArr = [10, 3, 11, 15, 19, 1];
let strArr = ['C', 'W', 'P', 'E', 'R', 'G'];

// Math.floor make this code not functional ?
const quicksort = (array) => {
    if (array.length <= 1) { return array; }
  
    const pivot = array[Math.floor(array.length / 2)];
    const left = array.filter(x => x < pivot);
    const right = array.filter(x => x > pivot);
    const middle = array.filter(x => x === pivot);
  
    return [...quicksort(left), ...middle, ...quicksort(right)];
};

console.log( quicksort(numArr) );
console.log( quicksort(strArr) );
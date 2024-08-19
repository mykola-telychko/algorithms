var numbers = [23, 15, 42, 4, 8, 16, 3, 9, 27, 10, 33, 6, 13, 1, 25];
var str = ["G", "F", "C", "A", "B", "E", "D"];

function mergeSort(arr) {
  var len = arr.length;

  if (len === 1) { return arr; } 

  var mid = Math.floor(len / 2),
      left = arr.slice(0, mid),
      right = arr.slice(mid);

  mergeSort(left);
  mergeSort(right);
  merge(left, right, arr);

  return arr; 
}

function merge(left, right, arr) {
  var a = 0;

  while (left.length && right.length) {
    arr[a++] = (right[0] < left[0]) ? right.shift() : left.shift();
  }
  while (left.length) {
    arr[a++] = left.shift();
  }
  while (right.length) {
    arr[a++] = right.shift();
  }
}

console.log(mergeSort(numbers)); 
console.log(mergeSort(str)); 




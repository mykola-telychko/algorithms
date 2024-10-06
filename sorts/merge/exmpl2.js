var numbers = [23, 15, 42, 4, 8, 16, 3, 9, 27, 10, 33, 6, 13, 1, 25];
var str = ["G", "F", "C", "A", "B", "E", "D"];

function mergeSort2(a) {
  if (a.length <= 1) return a; // Return the array itself if it has one or no elements
  
  const mid = Math.floor(a.length / 2);
  const left = a.slice(0, mid);
  const right = a.slice(mid);

  mergeSort2(left);
  mergeSort2(right);

  let ia = 0, il = 0, ir = 0;
  
  while (il < left.length && ir < right.length) {
    a[ia++] = left[il] < right[ir] ? left[il++] : right[ir++];
  }
  
  while (il < left.length) a[ia++] = left[il++];
  
  while (ir < right.length) a[ia++] = right[ir++];
 
  return a; // Return the sorted array
}

console.log(mergeSort2(numbers)); 
console.log(mergeSort2(str)); 

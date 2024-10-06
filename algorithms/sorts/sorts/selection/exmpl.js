// https://rosettacode.org/wiki/Sorting_algorithms/Selection_sort
var numArr = [10, 3, 11, 15, 19, 1];
var strArr = ['C', 'W', 'P', 'E', 'R', 'G'];

function selectionSort(nums) {
  var len = nums.length;
  for(var i = 0; i < len; i++) {
    var minAt = i;
    for(var j = i + 1; j < len; j++) {
      if(nums[j] < nums[minAt]) minAt = j;
    }

    if(minAt != i) {
      var temp = nums[i];
      nums[i] = nums[minAt];
      nums[minAt] = temp;
    }
  }
  return nums;
}

console.log(selectionSort(numArr));
console.log(selectionSort(strArr));
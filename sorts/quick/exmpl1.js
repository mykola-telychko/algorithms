// https://rosettacode.org/wiki/Sorting_algorithms/Quicksort
var numArr = [10, 3, 11, 15, 19, 1];
var strArr = ['C', 'W', 'P', 'E', 'R', 'G'];

function sort(array, less) {

  function swap(i, j) {
    var t = array[i];
    array[i] = array[j];
    array[j] = t;
  }

  function quicksort(left, right) {

    if (left < right) {
      var pivot = array[left + Math.floor((right - left) / 2)],
          left_new = left,
          right_new = right;

      do {
        while (less(array[left_new], pivot)) {
          left_new += 1;
        }
        while (less(pivot, array[right_new])) {
          right_new -= 1;
        }
        if (left_new <= right_new) {
          swap(left_new, right_new);
          left_new += 1;
          right_new -= 1;
        }
      } while (left_new <= right_new);

      quicksort(left, right_new);
      quicksort(left_new, right);

    }
  }

  quicksort(0, array.length - 1);

  return array;
}

var sorted_array = sort(numArr, (a,b) => { return a<b; });
var sorted_array2 = sort(strArr, (a,b) => { return a<b; });

console.log(sorted_array, sorted_array2 );



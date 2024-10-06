// https://rosettacode.org/wiki/Sorting_algorithms/Bubble_sort
var numbers = [23, 15, 42, 4, 8, 16, 6, 13, 1, 25];
var str = ["G", "F", "C", "A", "B", "E", "D"];

Array.prototype.bubblesort = function() {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < this.length; i++) {
      if (this[i - 1] > this[i]) {
        done = false;
        var tmp = this[i - 1];
        this[i - 1] = this[i];
        this[i] = tmp;
      }
    }
  }
  return this;
}

console.log(numbers.bubblesort());
console.log(str.bubblesort());

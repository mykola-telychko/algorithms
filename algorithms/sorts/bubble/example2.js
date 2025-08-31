const numbers = [23, 15, 42, 4, 8, 16, 3, 9, 27, 10, 33, 6, 13, 1, 25];
var str = ["G", "F", "C", "A", "B", "E", "D"];

Array.prototype.bubblesort = function() {
    let swapped;
    do {
      swapped = false;
      for (let i = 1; i < this.length; i++) {
        if (this[i - 1] > this[i]) {
          // deconstruction to exchange values
          [this[i - 1], this[i]] = [this[i], this[i - 1]];
          swapped = true;
        }
      }
    } while (swapped);
    return this;
}
  
console.log(numbers.bubblesort());
console.log(str.bubblesort());


// How the code works:
// do loop: Ensures that the for loop is executed at least once to check for unsorted elements.
// The for loop: Iterates over an array and swaps values ​​using destructuring if the previous 
// element is greater than the next.
// Conditional set swapped: If at least one swap has been made, the loop will continue 
// until the array is completely sorted.

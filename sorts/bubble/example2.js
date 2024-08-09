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
// do...while loop: Ensures that the for loop is executed at least once to check for unsorted elements.
// The for loop: Iterates over an array and swaps values ​​using destructuring if the previous element is greater than the next element.
// Conditional set swapped: If at least one swap has been made, the loop will continue until the array is completely sorted.

// Як працює код:
// Цикл do...while: Гарантує, що цикл for виконається хоча б один раз, щоб перевірити наявність несортованих елементів.
// Цикл for: Перебирає масив і виконує обмін значень за допомогою деструктуризації, якщо попередній елемент більший за наступний.
// Умовне встановлення swapped: Якщо був здійснений хоча б один обмін, цикл продовжить виконання, поки масив не буде повністю відсортований.

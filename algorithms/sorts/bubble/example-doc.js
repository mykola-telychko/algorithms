Array.prototype.bubblesort = function(){
  var isSortedFlag = false;// set flag
  while (!isSortedFlag) { // revert flag
    for ( let i = 1; i < this.length; i++ ) { // start from 1
      isSortedFlag = true;// assume if dont need swap
      if(this[i - 1] > this[i]){// compare
        isSortedFlag = false;
        var tmpPrevNotSortedEl = this[i - 1];
        this[i - 1] = this[i]; // rotation 
        this[i] = tmpPrevNotSortedEl; // swap
      }
    }
  }
  return this;
}

console.log(["G", "F", "C", "A", "B", "E", "D"].bubblesort());

  // done  для відстеження чи був масив відсортований
  // Цикл працює, поки масив не відсортований
  // Припускаємо, що масив вже відсортований
  // Проходимо починаючи з другого елемента
  // Якщо поточний елемент менший за попередній, то порядок неправильний
  // Якщо відбулося одне перестанов - масив не відсортований
  // Зберігаємо поточний елемент у тимчасову змінну
  // Міняємо місцями попередній і поточний елементи
  // Повертаємо відсортований масив


var numbers = [23, 15, 42, 4, 8, 16, 6, 13, 1, 25];
var str = ["G", "F", "C", "A", "B", "E", "D"];

Array.prototype.bubblesort = function() {
  // done  для відстеження чи був масив відсортований
  var done = false;

  // Цикл працює, поки масив не відсортований
  while (!done) {
    // Припускаємо, що масив вже відсортований
    done = true;

    // Проходимо починаючи з другого елемента
    for (var i = 1; i < this.length; i++) {
      // Якщо поточний елемент менший за попередній, то порядок неправильний
      if (this[i - 1] > this[i]) {
        // Якщо відбулося одне перестанов - масив не відсортований
        done = false;

        // Зберігаємо поточний елемент у тимчасову змінну
        var tmp = this[i - 1];

        // Міняємо місцями попередній і поточний елементи
        this[i - 1] = this[i];
        this[i] = tmp;
      }
    }
  }

  // Повертаємо відсортований масив
  return this;
}

console.log(numbers.bubblesort());
console.log(str.bubblesort());

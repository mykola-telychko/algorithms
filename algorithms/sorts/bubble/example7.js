Array.prototype.bubbleSort = function() {
  console.log('Починаємо сортування...');
  
  const n = this.length;
  
  for (let i = 0; i < n; i++) {
    // Останні i елементів вже на своїх місцях
    for (let j = 0; j < n - i - 1; j++) {
      // Порівнюємо сусідні елементи
      if (this[j] > this[j + 1]) {
        // Міняємо місцями (деструктуризація для swap)
        [this[j], this[j + 1]] = [this[j + 1], this[j]];
      }
    }
  }
  // Щоб метод запрацював, ми маємо використовувати
  //ключове слово this, яке всередині функції буде посилатися на сам масив.
  return this; 
};

// Використання:
const arr = [64, 34, 25, 12, 22, 11, 90];
arr.bubbleSort();
console.log('Результат:', arr);
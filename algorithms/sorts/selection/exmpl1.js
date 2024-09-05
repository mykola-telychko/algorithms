const numArr = [10, 3, 11, 15, 19, 1];
const strArr = ['C', 'W', 'P', 'E', 'R', 'G'];

const selectionSort = (arr) => {
    const findMinIndex = (list, start) =>
      list.slice(start).reduce((minIndex, current, currentIndex, subArr) => 
        current < list[minIndex] ? currentIndex + start : minIndex,
        start
      );
  
    const sortRecursively = (list, i) => {
      if (i >= list.length) return list;
      
      const minAt = findMinIndex(list, i);
      const swappedList = [...list];
      
      if (minAt !== i) {
        [swappedList[i], swappedList[minAt]] = [swappedList[minAt], swappedList[i]];
      }
      
      return sortRecursively(swappedList, i + 1);
    };
  
    return sortRecursively(arr, 0);
  };
  
  console.log(selectionSort(numArr)); 
  console.log(selectionSort(strArr)); 
  
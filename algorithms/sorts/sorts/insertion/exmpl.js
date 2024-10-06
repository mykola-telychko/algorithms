// https://rosettacode.org/wiki/Sorting_algorithms/Insertion_sort
var numArr = [10, 3, 11, 15, 19, 1];
var strArr = ['C', 'W', 'P', 'E', 'R', 'G'];

function insertionSort (a) {
    for (var i = 0; i < a.length; i++) {
        var k = a[i];
        for (var j = i; j > 0 && k < a[j - 1]; j--)
            a[j] = a[j - 1];
        a[j] = k;
    }
    return a;
}

console.log(insertionSort(numArr));
console.log(insertionSort(strArr));
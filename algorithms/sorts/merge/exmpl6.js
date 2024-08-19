var numbers = [23, 15, 42, 4, 8, 16, 3, 9, 27, 10, 33, 6, 13, 1, 25];
var str = ["G", "F", "C", "A", "B", "E", "D"];


function mergeSortInPlaceFast(v) {
    sort(v, 0, v.length, v.slice());

    function sort(v, lo, hi, t) {
        let n = hi - lo;
        if (n <= 1) {
            return;
        }
        let mid = lo + Math.floor(n / 2);
        sort(v, lo, mid, t);
        sort(v, mid, hi, t);
        for (let i = lo; i < hi; i++) {
            t[i] = v[i];
        }
        let i = lo, j = mid;
        for (let k = lo; k < hi; k++) {
            if (i < mid && (j >= hi || t[i] < t[j])) {
                v[k] = t[i++];
            } else {
                v[k] = t[j++];
            }
        }
    }
    return v; 
}

console.log(mergeSortInPlaceFast(numbers)); 
console.log(mergeSortInPlaceFast(str)); 
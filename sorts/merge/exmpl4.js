var numbers = [23, 15, 42, 4, 8, 16, 3, 9, 27, 10, 33, 6, 13, 1, 25];
var str = ["G", "F", "C", "A", "B", "E", "D"];

function mergeSort(v) {
    if (v.length <= 1) { return v; }

    let m = Math.floor(v.length / 2);
    let l = mergeSort(v.slice(0, m));
    let r = mergeSort(v.slice(m));

    function merge(a, b) {
        let i = 0, j = 0;
        let n = a.length + b.length;
        let c = [];
        while (c.length < n) {
            if (i < a.length && (j >= b.length || a[i] < b[j])) {
                c.push(a[i++]);
            } else {
                c.push(b[j++]);
            }
        }
        return c;
    }

    return merge(l, r);
}

console.log(mergeSort(numbers)); 
console.log(mergeSort(str)); 
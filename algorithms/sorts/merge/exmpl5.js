var numbers = [23, 15, 42, 4, 8, 16, 3, 9, 27, 10, 33, 6, 13, 1, 25];
var str = ["G", "F", "C", "A", "B", "E", "D"];

function mergeSortInPlace(v) {
    if (v.length <= 1) {
        return v; // Return the array itself for clarity
    }

    let m = Math.floor(v.length / 2);
    let l = v.slice(0, m);
    let r = v.slice(m);
    mergeSortInPlace(l);
    mergeSortInPlace(r);
    merge(l, r, v);

    return v; // Optionally return the sorted array

    function merge(a, b, c) {
        let i = 0, j = 0;
        for (let k = 0; k < c.length; k++) {
            if (i < a.length && (j >= b.length || a[i] < b[j])) {
                c[k] = a[i++];
            } else {
                c[k] = b[j++];
            }
        }
    }
}

console.log(mergeSortInPlace(numbers)); 
console.log(mergeSortInPlace(str)); 
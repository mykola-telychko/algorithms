numArr = [10, 3, 11, 15, 19, 1]
strArr = ['C', 'W', 'P', 'E', 'R', 'G']

def insertion_sort(L):
    for i in range(1, len(L)):  # Python 3 uses range instead of xrange
        key = L[i]
        j = i - 1
        # Shift elements of L[0..i-1], that are greater than key, to one position ahead
        while j >= 0 and L[j] > key:
            L[j + 1] = L[j]
            j -= 1
        L[j + 1] = key
    return L  # Return sorted array after sorting

# Now print the sorted arrays
print(insertion_sort(numArr))
print(insertion_sort(strArr))

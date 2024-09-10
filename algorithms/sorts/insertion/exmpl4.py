numArr = [10, 3, 11, 15, 19, 1]

def insertion_sort(L):
    for i, value in enumerate(L[1:], start=1):
        j = i - 1
        # Shift elements to the right to make room for `value`
        while j >= 0 and L[j] > value:
            L[j + 1] = L[j]
            j -= 1
        L[j + 1] = value  # Insert `value` into its correct position
    return L  # Return the sorted list

print(insertion_sort(numArr))  # Output: [1, 3, 10, 11, 15, 19]

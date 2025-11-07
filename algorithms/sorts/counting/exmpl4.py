def counting_sort(arr):
    # Find the maximum value in the array
    max_val = max(arr)

    # Initialize a count array with zeros
    count = [0] * (max_val + 1)

    # Store the count of each element
    for num in arr:
        count[num] += 1

    # Modify the count array to store the cumulative count
    for i in range(1, len(count)):
        count[i] += count[i - 1]

    # Initialize the output array
    output = [0] * len(arr)

    # Place the elements in the output array in sorted order
    for num in reversed(arr):
        output[count[num] - 1] = num
        count[num] -= 1

    return output

# Example usage
arr = [4, 2, 2, 8, 3, 3, 1]
sorted_arr = counting_sort(arr)
print("Sorted array:", sorted_arr)

def bubble_sort(seq):
 
    changed = True
    while changed:
        changed = False
        for i in range(len(seq) - 1):
            if seq[i] > seq[i + 1]:
                seq[i], seq[i + 1] = seq[i + 1], seq[i]
                changed = True
    return seq

if __name__ == "__main__":
    # List of strings (fruits)
    fruits = ["cherry", "apple", "date", "banana"]
    
    print("Original fruits list:")
    print(fruits, "\n")  # Print the original fruits list
    
    bubble_sort(fruits)
    
    print("Sorted fruits list:")
    print(fruits, "\n")  # Print the sorted fruits list

    # List of numbers
    numbers = [1, 5, 3, 2, 4]
    
    print("Original numbers list:")
    print(numbers, "\n")  # Print the original numbers list
    
    bubble_sort(numbers)
    
    print("Sorted numbers list:")
    print(numbers)  # Print the sorted numbers list

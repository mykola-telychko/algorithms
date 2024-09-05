#!/bin/bash

# Function to perform selection sort
selection_sort() {
  local arr=("$@")   # Get the array passed to the function
  local n=${#arr[@]} # Get the length of the array

  for ((i = 0; i < n; i++)); do
    min=$i
    for ((j = i + 1; j < n; j++)); do
      if [[ ${arr[j]} < ${arr[min]} ]]; then
        min=$j
      fi
    done
    # Swap the elements
    temp=${arr[i]}
    arr[i]=${arr[min]}
    arr[min]=$temp
  done
  echo "${arr[@]}"   # Return the sorted array
}

# Declare number and string arrays
numArr=(10 3 11 15 19 1)
strArr=('C' 'W' 'P' 'E' 'R' 'G')

# Sort and print the number array
echo "Sorted number array:"
selection_sort "${numArr[@]}"

# Sort and print the string array
echo "Sorted string array:"
selection_sort "${strArr[@]}"

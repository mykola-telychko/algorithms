#!/bin/bash

# https://rextester.com/l/bash_online_compiler
quick_sort() {
    local array=("$@")
    local length=${#array[@]}

    if [ $length -le 1 ]; then
        echo "${array[@]}"
        return
    fi

    local pivot=${array[0]}
    local lesser=()
    local greater=()
    local equal=("$pivot")

    for ((i=1; i<$length; i++)); do
        if [[ ${array[i]} < $pivot ]]; then
            lesser+=("${array[i]}")
        elif [[ ${array[i]} > $pivot ]]; then
            greater+=("${array[i]}")
        else
            equal+=("${array[i]}")
        fi
    done

    # recursive sort
    lesser=($(quick_sort "${lesser[@]}"))
    greater=($(quick_sort "${greater[@]}"))

    # union
    echo "${lesser[@]} ${equal[@]} ${greater[@]}"
}

arrNum=(4 65 2 -31 0 99 83 782 1)
arrStr=('AB' 'GF' 'YJ' 'KU' 'ER' 'BG' 'HD')

sortedStr=($(quick_sort "${arrStr[@]}"))
sortedNum=($(quick_sort "${arrNum[@]}"))

echo "sortedStr: ${sortedStr[@]}"
echo "sortedNum: ${sortedNum[@]}"

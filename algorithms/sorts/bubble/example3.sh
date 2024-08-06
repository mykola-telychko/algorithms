function bubble_sort() {
    local a=("$@")
    local n
    local i
    local j
    local t
    ft=(false true)
    n=${#a[@]} # array length
    i=n
    while ${ft[$(( 0 < i ))]}
    do
        j=0
        while ${ft[$(( j+1 < i ))]}
        do
            if ${ft[$(( a[j+1] < a[j] ))]}
            then
    	        t=${a[j+1]}
    	        a[j+1]=${a[j]}
    	        a[j]=$t
    	    fi
            t=$(( ++j ))
        done
        t=$(( --i ))
    done
    echo ${a[@]}
}

bubble_sort 3 2 8

a=(2 45 83 89 1 82 69 88 112 99 0 82 58 65 782 74 -31 104 4 2)
bubble_sort ${a[@]}

b=($( bubble_sort ${a[@]} ) )

# length
echo ${#b[@]}

echo ${b[@]}

<?php 

$numArr = [10, 3, 11, 15, 19, 1];
$strArr = ['C', 'W', 'P', 'E', 'R', 'G'];

function selection_sort($arr) {
    $n = count($arr);
    for($i = 0; $i < $n; $i++) {
        $min = $i;
        for($j = $i + 1; $j < $n; $j++){
            if($arr[$j] < $arr[$min]){
                $min = $j;
            }
        }
        // Swap the elements
        list($arr[$i], $arr[$min]) = array($arr[$min], $arr[$i]);
    }
    return $arr; 
}

print_r(selection_sort($numArr));
print_r(selection_sort($strArr));

?>

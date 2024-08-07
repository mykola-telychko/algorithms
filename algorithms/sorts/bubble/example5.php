<?php

$numArr = [2, 32, 53, 37, 60, 90, 1];
$strArr = ['AB', 'GF', 'YJ', 'KU', 'ER', 'BG', 'HD'];


function bubbleSort(array $array){
    foreach($array as $i => &$val){
        foreach($array as $k => &$val2){
            if($k <= $i)
                continue;
            if($val > $val2) {
                list($val, $val2) = [$val2, $val];
                break;
            }
        }
    }
    return $array;
}


print_r( bubbleSort($numArr) );
print_r( bubbleSort($strArr) );
<?php

$numArr = [2, 32, 53, 37, 60, 90, 1];
$strArr = ['AB', 'GF', 'YJ', 'KU', 'ER', 'BG', 'HD'];

function mergesort($arr) {
    if (count($arr) == 1) return $arr;

    $mid = count($arr) / 2;
    $left = array_slice($arr, 0, $mid);
    $right = array_slice($arr, $mid);

    $left = mergesort($left);
    $right = mergesort($right);

    $res = array();
    while (count($left) > 0 && count($right) > 0) {
        if ($left[0] > $right[0]) {
            $res[] = $right[0];
            $right = array_slice($right, 1);
        } else {
            $res[] = $left[0];
            $left = array_slice($left, 1);
        }
    }

    while (count($left) > 0) {
        $res[] = $left[0];
        $left = array_slice($left, 1);
    }

    while (count($right) > 0) {
        $res[] = $right[0];
        $right = array_slice($right, 1);
    }

    return $res;
}

print_r(mergesort($numArr));
print_r(mergesort($strArr));

?>
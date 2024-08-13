<?php

$numArr = [2, 32, 53, 37, 60, 90, 1];
$strArr = ['AB', 'GF', 'YJ', 'KU', 'ER', 'BG', 'HD'];

function mergesort($arr) {
    // check array 
    if (count($arr) <= 1) {
        return $arr;
    }

    // explode array in half
    $mid = floor(count($arr) / 2);
    $left = array_slice($arr, 0, $mid);
    $right = array_slice($arr, $mid);

    // sort sides
    $left = mergesort($left);
    $right = mergesort($right);

    // fin merge
    return array_reduce(
        array_merge($left, $right),
        function($acc, $item) use (&$left, &$right) {
            if (empty($left)) {
                return array_merge($acc, [$item], $right);
            }
            if (empty($right)) {
                return array_merge($acc, [$item], $left);
            }
            if ($left[0] <= $right[0]) {
                return array_merge($acc, [array_shift($left)]);
            } else {
                return array_merge($acc, [array_shift($right)]);
            }
        },
        []
    );
}

print_r(mergesort($numArr));
print_r(mergesort($strArr));

?>
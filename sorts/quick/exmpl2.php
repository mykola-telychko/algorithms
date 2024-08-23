<?php

$numArr = [2, 32, 53, 37, 60, 90, 1];
$strArr = ['AB', 'GF', 'YJ', 'KU', 'ER', 'BG', 'HD'];

function quicksort($arr){
    
	$lte = $gt = array();
	if(count($arr) < 2){ return $arr; }
	
	$pivot_key = key($arr);
	$pivot = array_shift($arr);
	
	foreach ( $arr as $val ) {
	    
		if ( $val <= $pivot ) {
			$lte[] = $val;
		} else {
			$gt[] = $val;
		}
		
	}
	
	return array_merge(quicksort($lte),array($pivot_key=>$pivot),quicksort($gt));
}

print_r(quicksort($numArr));
echo "\n";
print_r(quicksort($strArr));

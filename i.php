<?php
function cubeChecker($volume, $side){
    if ($volume != $side**3) {
        echo "false right";
    }else{
        echo "true right";
    }
//   return $true_false;
}
cubeChecker(8,2);
cubeChecker(1,1);
cubeChecker(27, 3);
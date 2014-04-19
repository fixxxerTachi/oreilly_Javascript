<?php
//echo '{"x":"this is x","y":"this is y"}';
if(empty($_GET['data'])){
	$arr=array('x'=>'this is x','y'=>'this is y');
	echo json_encode($arr);
}else{
	$arr=array('x'=>$_GET['data'],'y'=>'this is y');
	echo json_encode($arr);
}



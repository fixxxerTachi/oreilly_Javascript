<?php
if(!empty($_GET['data'])){	
	echo $_GET['data'];
}
if(!empty($_POST['data'])){
	echo $_POST['data'] . '-post data';
}

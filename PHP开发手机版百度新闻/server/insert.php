<?php 
     header("Content-type:application/jason;
    	charset=utf-8");
     require_once('db.php');
     if($link){
	//获得POST发来的数据
	$newstitle = $_POST['newstitle'];
	$newstype = $_POST['newstype'];
	$newsimg = $_POST['newsimg'];
	$newstime = $_POST['newstime'];
	$newssrc = $_POST['newssrc'];
	
//插入到数据库中
	$sql = "INSERT INTO news VALUES ('','{$newstitle}', '{$newstype}', '{$newsimg}', '{$newstime}','{$newssrc}','{$onfocus}')";
	mysqli_query($link,"SET NAMES utf8");
	$result = mysqli_query($link,$sql);
	echo json_encode(array("success"=>"ok"));
}

mysqli_close($link);
 ?>
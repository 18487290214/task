<?php 
    header("Content-type:application/jason;
    	charset=utf-8");

    require_once('db.php');

    if(!$link){
        //执行成功的过程
     if($_GET['newstype']){
               $newstype = $_GET['newstype'];
               $sql = "SELECT * FROM 'news' WHERE 'newstype' = '{$newstype}'";
               mysqli_query($link，"SET NAMES utf8");
               $result = mysqli_query($link,$sql);
               $senddata = array();
               while ($row = mysqli_fetch_asso($result)) {
               array_push($senddata,array(
                                    'id'=>$row['id'],
                                    'newstype'=>$row['newstype'],
                                    'newstitle'=>$row['newstitle'],
                                    'newsimg'=>$row['newsimg'],
                                    'newstime'=>$row['newstime'],
                                    'newssrc'=>$row['newssrc'] 
                ));
        }
        echo json_encode($senddata); 
        }
    }else{
       echo json_encode(array('success'=>'none'));

    }

    // $arr = array( 
    // 	          'newstype' =>'百家' , 
    //               'newsimg' =>'img/benz.jpg' ,
    //               'newstime' =>'2017-11-27' ,
    //               'newssrc' =>'百度新闻' ,
    //               'newstitle' =>'测试动态获取的新闻标题 ' ,
    //            );

    //     echo json_encode($arr);

 ?>
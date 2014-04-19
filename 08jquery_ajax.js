//60秒ごとにデータを取得
var timer=setInterval(function(){$('#status').load('status_report.php');},6000);

//domを指定
$('#status1').load('status1_report.php #status');

//get
$('#status2').load('index.php','data=this is get request');

//post
$('#status3').load('index.php',{data:'this is post data'});

//getJSON(url,data,callback)
$.getJSON('json.php','data=this is get request',function(data){
	console.log(data.x)
	
});

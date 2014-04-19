/**** xhrの流れ**************************
/* Httpリクエスト
Httpリクエストメソッド
リクエスト先のURL
リクエストヘッダ（省略可）
リクエストボディ（省略可）
/*Httpレスポンス
ステータスコード
レスポンスヘッダ
レスポンスボディ
*************************************/

function getMessage(){
	var name=$('input[name=name]').val();
	var request=new XMLHttpRequest()
	//timer
	var timedout=false
	var timer = setTimeout(function(){
		timedout= true
		request.abort()
		console.log('timeout')
	},60)

	var url='index.php?data=' + encodeURIComponent(name);
	request.open('get',url)
	if(timedout) return
	clearTimeout(timer)
	request.onreadystatechange=function(){
		if(request.readyState == 4 && request.status ==200){
			var str = request.responseText;
			console.log(str)
		}
	}
	request.send(null)
}

function postMessage(){
	var name=$('input[name=name]').val();
	var request=new XMLHttpRequest()
	request.open('post','index.php')
	request.onreadystatechange=function(){
		if(request.readyState == 4 && request.status ==200){
			var str = request.responseText;
			console.log(str)
		}
	}
	request.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
	var data='data=' + encodeURIComponent(name)
	request.send(data)
}
$('#submit').on('click',function(e){
	e.preventDefault()
	getMessage()
	postMessage()
});

	

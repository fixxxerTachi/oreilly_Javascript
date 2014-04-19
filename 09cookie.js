// enable cookie?
console.log(navigator.cookieEnabled)

//register cookie
function setCookie(name,value,dayToLive){
	var cookie=name + '=' + encodeURIComponent(value)
	if(typeof daysToLive === 'number')
		cookie += ';max-age=' + (daysToLive * 60 * 60 * 24);
	document.cookie=cookie
}
setCookie('name','this is cookie',1)


//get cookie
function getCookies(){
	var cookies={}
	var all=document.cookie;
	if(all === '')
		return cookies;
	var list=all.split(';');  			//名前=値のペアに分解する
	for(var i=0; i<list.length;i++){
		var cookie=list[i];
		var p=cookie.indexOf('=')       //最初の＝を探す
		var name=cookie.substring(0,p)  //クッキー名を取得する
		var value=cookie.substring(p+1) //クッキー値を取得する
		value=decodeURIComponent(value) 
		cookies[name]=value
	}
	return cookies;
}
console.log(getCookies());

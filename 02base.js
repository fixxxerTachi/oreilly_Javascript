/**** 型　****/
/*基本形*
	数値
	文字列
	論理値
	null
	undefined
*/
/*オブジェクト型*
	array
	object-function,class
		class-Array,Function,Date,RegExp,Error
*/
/* 例外 */
var func=function(x){
	if(x<0) throw new Error('x must be negative');
	for(var f=1; x >1; f *=x, x--)
	return f;
}
try{
	console.log('result: '+	func(-1));
}catch(e){
	console.log(e.message);
}finally{
	console.log('final');
}

/*** スコープチューン ***/
/*
	with (object)
		statement
*/
with(document.forms[0]){
	name.value='tachi';
	address.value='Tochigi';
	email.value='hoge@hoge.com';
}

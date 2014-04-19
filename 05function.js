var caluculator={
	x:1,
	y:2,
	add:function(){
		this.result=this.x + this.y
	},
}
caluculator.add()
console.log(caluculator.result)

var o = {
	m:function(){
		var self = this;							//入れ子の関数内からoオブジェクトを利用するためにselfに代入
		console.log(this === o);
		f();

		function f(){
			console.log('f this: ' + (this === o)); //入れ子の関数内のthisはグローバルまたはundefined
			console.log('f self: ' + (self === o));	//true
		}
	}
}
o.m()

/*** 可変長引数 ***/
var f = function(x,y,z){
	console.log(arguments);
	var req=0;
	for(var i=0;i<arguments.length;i++){
		var req = arguments[i] + req;
	}
	return req;
}
console.log(f(1,2,3));

/*** 名前空間 **/
var hoge=(function(){
	var my = 'my str'
	function show(){
		alert('hoge')
	}
	return show;
}());
hoge()

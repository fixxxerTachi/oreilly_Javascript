var test2=function(){
	this.a='aaa';
	this.b=function(){
		return 'bbb';
	}
}
var test=(function(){
	var d=new Date();
	var t=new test2();
	return {
		hoge:'a',
		date:d,
		t2:t
	}
})();

console.log(test.date);
console.log(test.t2.a);
var test2=new test2();
console.log(test2.a);
console.log(test2.b());


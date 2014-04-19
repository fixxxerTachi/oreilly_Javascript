function Point(x,y){
	this.x = x;
	this.y = y;
}
var p = new Point(1,1);
Point.prototype.r=function(){
	return Math.sqrt(
		this.x * this.x + this.y * this.y
	);
}
console.log(p.r());
p.b=function (){
	return this.x + this.y;
};
console.log(p.b());

//改行は｛｝がいらない
var answer;
if(answer)
	console.log('answer'); 
else 
	console.log('no answer');

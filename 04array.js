var o={
	x:1,
	y:2,
	caluculate:function(){ return this.x * this.y }
}
console.log(Object.keys(o));

var data=[1,2,3,4,5];
var sum=0;
data.forEach(function(value){ sum+=value });
console.log(sum); //=>15

/*** forEach 配列自身を変更することができる ***/
data.forEach(function(v,i,a){
	//値、インデックス、配列自身
	a[i] = v + 1;
});
console.log(data); //=>[2,3,4,5,6]

/*** map 新しい配列を作る ***/
var b=data.map(function(x){ return x * x });
console.log(b); //=>[4,9,16,25,36]

/*** filter ***/
a=[5,4,3,2,1]
small=a.filter(function(x){ return x < 3 });
console.log(small); //->[2,1]

/*** every,some ***/
/* every : すべてがtrueならtrueを返す */
/* some : trueがあればtrue */
a=[1,2,3,4,5];
console.log(a.every(function(x) { return x < 10 }));
console.log(a.some(function(x) { return x%2 ===0 }));

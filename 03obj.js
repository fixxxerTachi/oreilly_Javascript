var book={
	"main title":"Javascript",
	"sub-title":"The Definitive Guide", //=>空白やハイフン、予約語は文字列リテラルを使う
	"for":"all audients",
	author:{
		firstname:"David",
		surname:"Flanagan"
	}
}
console.log(book.author)

/**** プロパティのテスト ***/
var o = { x:1 }
console.log("x" in o); //=>左側に文字列としてプロパティを記述

var o = {
	x:1,
	y:1,
	caluculate:function(){ return this.x + this.y; }
}
console.log(o.x);
o.x,o.y=3,4;
console.log(o.caluculate());

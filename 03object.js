var book={
	'main title':'JavaScript',			//空白やハイフンが含まれるので文字列リテラルをつかう
	'sub-title':'The Dfinitive Guide',
	'for':'all audience',
	author:{
		firstname:'David',
		surname:'Flanagan'
	},
	price:100
};
console.log(
	book['main title'] +  '/' +
	book.author.firstname + '/' +
	book['price']
);

/*** test ***/
var o = { x:1 }
console.log('x' in o);
console.log('toString' in o);

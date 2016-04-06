// object are passed by reference. they are never copied
var stooge = {};

var x = stooge;
x.nickname = 'Curly';
var nick = stooge.nickname;

//nick is 'Curly' because x and stooge are ref to the same object

var a = {}, b = {}, c= {};

a.letter = "a";
b.value = "b";
c.character = "c";

console.log(a);
console.log(b);
console.log(c);

// a, b, c each refer to a different empty object

a = b = c = {};

a.hello = "hi there my name is calvin";

//a, b, c all refer to the same empty object

console.log(a);
console.log(b);
console.log(c);

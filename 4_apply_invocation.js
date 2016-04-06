// apply method lets us construct an array of arguments to use to invoke a function

// lets us choose the value of this!

// takes 2 parameters firs tis the value that should be bound to this

// second is an array of parameters

var add = function(a, b){
  // console.log(this);
  return a+b;
}

var numArray = [1, 2];

var sum = add.apply(null, numArray);

console.log("sum is");
console.log(sum);

var myObject = {
  a:1,
  b:5
}


var objectAdd = function(arg1, arg2){
  console.log(arg1);
  console.log(arg2);
  return this.a + this.b;
}

argsArr = ["hello", "goodbye"]

console.log(objectAdd.apply(myObject, argsArr));
console.log(myObject);



// console.log(add.apply.this);

// var something = add.apply("hello", numArray)

// console.log(add.apply("hello", numArray))
// console.log("sum.this is");
// console.log(sum.this);

var statusObject = {
  status: 'A-OK'
};

var Quo = function(string){
  this.status = string;
}


Quo.prototype.get_status = function(){
  return this.status;
}

var status = Quo.prototype.get_status.apply(statusObject)

console.log(status);

// status is 'A-OK'


// when a function is not the property of an objet then it is invoked as a function

//  this is bound to the global object

//invoke as a function not a method

var add = function(a, b){
  // console.log("this is the global object or local object?");
  // console.log(this);
  return a+b;
}

add();

var myObject = {
  value: 3,
  add: add,
};

myObject.double = function(){
  var that = this //workaround
  var helper = function(){
    console.log("that is:")
    console.log(that)
    // console.log("this is:");
    // console.log(this);
    that.value = that.add(that.value, that.value);
  };

  helper();
}

myObject.getValue = function(){
  return this.value;
}


// invoke double as a method

myObject.double();

console.log(myObject.getValue());
//function is stored as a property of an object
// call it a method

// method invoked this is bound to that object

// if invocation expression statement contains a refinedment its is invoked as a method

// refinement . dot expression or [subscript] expression

// create myObject. It has a value and an increment method
//  the increment method takes an optional parameter.

// if the argument is nota number then 1 is used as the default

var myObject = {
  value: 0,
  increment: function(inc){
    this.value += typeof inc === 'number' ? inc: 1;
  }
};

myObject.increment();

document.writeln(myObject.value)

myObject.increment(2);
document.writeln(myObject.value);
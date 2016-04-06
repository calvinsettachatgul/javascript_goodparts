var add = function(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw {
            name: 'TypeError',
            message: 'add needs both numbers'
        };

    }else{
      return a+b;
    }
}




console.log("both are numbers");

var sum1and5 = add(1, 5);

console.log(6 === sum1and5);


console.log("throws an error");

// var newError = add(1 , "Hi there");

//make a try_it function that calls the new add

var try_it = function(){
  try{
    add("seven");
  }catch(e){
    console.log(e.name + ": " + e.message);
  }
}

try_it();
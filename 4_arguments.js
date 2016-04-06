var sum = function(){

  var sum = 0;

  for ( var i = 0; i< arguments.length; i++){
    sum += arguments[i];
  }
  return sum;
}

var result = sum(1, 2, 3, 4,5);

console.log(result)

console.log("sum is 15")
console.log(result === 15)

//not a particularly useful pattern
// design error arguments is not really an array

// its an array-like object
// arguments has a length property but it lacks all array methods see consequences later
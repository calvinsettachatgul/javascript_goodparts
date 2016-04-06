var Quo = function(string){
  this.status = string;
}

Quo.prototype.get_status = function(){
  return this.status;
}

// make an instance of  Quo

var myQuo = new Quo("confused");

console.log(myQuo.get_status());
var empty_object = {};

var stooge = {
  "first-name": "Jerome",
  "last-name" : "Howard"
};

console.log("this is an empty object");
console.log(empty_object);

console.log("this is a stooge");
console.log(stooge);

var flight = {
  airline: "Oceanic",
  number: 815,
  departure: {
    IATA: "SYD",
    time: "2004-09-22 14:55",
    city: "Sydney"
  },
  arrival: {
    IATA: "LAX",
    time: "2004-09-23 10:42",
    city: "Los Angeles"
  }
};


console.log("this is flight");
console.log(flight);

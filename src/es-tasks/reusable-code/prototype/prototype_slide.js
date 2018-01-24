function Person(name) {
  this.name = name;
}

Person.prototype.getName = function() {
  return this.name;
};

var bob = new Person();
bob.getName();
// bob.hasOwnProperty("getName"); // => true/false
// Person.prototype.hasOwnProperty("getName"); // => true/false

Person.prototype.myMethod = function() {
};

var ed = new Person();
ed.myMethod();

//bob.myMethod();

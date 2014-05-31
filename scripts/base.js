// A set of base functions that the algorithms make use of

// Adding a method to Array to allow for easy 2-value swapping
Array.prototype.swap = function (x,y) {
  var temp_holder = this[x];
  this[x] = this[y];
  this[y] = temp_holder;
  return this;
}

// Check if n is a valid number
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
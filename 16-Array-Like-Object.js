//Turns Array like object into an array in ES5
const constructArr = function () {
  const arr = Array.prototype.slice.call(arguments);
  arr.push("the billiards room?");
  return arr.join(" ");
};
console.log(constructArr("was", "it", "in"));

//Turns Array like object into an array in ES6
const constructArr2 = function () {
  const arr = Array.from(arguments);
  arr.push("the billiards room?");
  return arr.join(" ");
};
console.log(constructArr("was", "it", "in"));

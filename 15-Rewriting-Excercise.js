// ES6 default parameters
const add = function (a, b = 2) {
  console.log(arguments); //logs [3]
  return a + b;
};
add(3); //5??

// ES5 default parameters
const add2 = function (a, b) {
  b = b || 2;
  console.log(arguments); //logs [3]
  return a + b;
};

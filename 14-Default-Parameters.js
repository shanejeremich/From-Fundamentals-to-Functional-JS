const add = function (a, b = 2) {
  console.log(arguments);
  return a + b;
};

add(3); // out: is still 3, only explicit values that are passed will show with arguments
console.log(add(3)); // correctly adds to 5 with default value
